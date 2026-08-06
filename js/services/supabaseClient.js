/**
 * Supabase Client Initialization & Data Provider
 * Supports real-time database sync with fallback to local JS datasets.
 */

// Reads Supabase config from window environment or localStorage
export const SUPABASE_URL = (typeof window !== "undefined" && window.ENV_SUPABASE_URL)
  ? window.ENV_SUPABASE_URL
  : "https://your-project.supabase.co";

export const SUPABASE_ANON_KEY = (typeof window !== "undefined" && window.ENV_SUPABASE_ANON_KEY)
  ? window.ENV_SUPABASE_ANON_KEY
  : "";

let supabaseInstance = null;

export function getSupabase() {
  if (!supabaseInstance && typeof window !== "undefined" && window.supabase && SUPABASE_ANON_KEY && SUPABASE_ANON_KEY !== "") {
    try {
      supabaseInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log("✓ Supabase Client initialized successfully!");
    } catch (e) {
      console.warn("⚠️ Failed to initialize Supabase client:", e);
    }
  }
  return supabaseInstance;
}

export async function fetchMasterDataFromSupabase() {
  const client = getSupabase();
  if (!client) {
    console.log("ℹ️ Supabase credentials not configured yet. Using local JS datasets.");
    return null;
  }

  try {
    const [resProvs, resSatker, resKabKota, resSettings] = await Promise.all([
      client.from("provinces").select("*").order("id"),
      client.from("satker").select("*").order("id"),
      client.from("kabkota").select("*").order("no_index"),
      client.from("app_settings").select("*")
    ]);

    if (resKabKota.error || resProvs.error) {
      console.warn("⚠️ Supabase query error, falling back to local JS:", resKabKota.error || resProvs.error);
      return null;
    }

    // Convert snake_case DB records back to camelCase App objects
    const kabKotaList = resKabKota.data.map(k => ({
      id: k.id,
      no: k.no_index,
      name: k.name,
      fullName: k.full_name,
      provId: k.prov_id,
      provName: k.prov_name,
      wilayahKerja: k.wilayah_kerja,
      pulau: k.pulau,
      delineasi: k.delineasi,
      zone: k.zone,
      ikk: parseFloat(k.ikk),
      indikasiAwal: k.indikasi_awal,
      targetUnitFinal: k.target_unit_final,
      satkerId: k.satker_id,
      satkerName: k.satker_name,
      ppkCount: k.ppk_count
    }));

    const settingsMap = {};
    (resSettings.data || []).forEach(s => {
      settingsMap[s.key] = s.value;
    });

    console.log(`✓ Loaded ${kabKotaList.length} Kab/Kota records live from Supabase PostgreSQL!`);
    return {
      kabKotaList,
      provinces: resProvs.data,
      satker: resSatker.data,
      sbmRates: settingsMap["sbm_rates"],
      defaultParams: settingsMap["default_params"],
      defaultTargets: settingsMap["default_targets"]
    };
  } catch (err) {
    console.warn("⚠️ Network/Supabase fetch exception, using local JS fallback:", err);
    return null;
  }
}

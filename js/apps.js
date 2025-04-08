// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Voltage Again",
  version: "1",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 9600,
  bpm: 100,
  totalframe: 460,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#3C0B5C",
  col0: "#919191",
  col1: "#2F2F4A",
  col2: "#4B4B4B",
  col3: "#1F2034",
  col4: "#232323",
  animearray: [
    {
      name: "01_lead",
      color: "6E0EA9",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "02_fuse",
      color: "6E0EA9",
      uniqsnd: !0,
    },
    {
      name: "03_rebel",
      color: "6E0EA9",
      uniqsnd: !0,
    },
    {
      name: "04_rob",
      color: "6E0EA9",
      uniqsnd: !0,
    },
    {
      name: "05_meld",
      color: "6E0EA9",
      uniqsnd: !1,
    },
    {
      name: "06_tux",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "07_fog",
      color: "2F2F4A",
      uniqsnd: !0,
    },
    {
      name: "08_bass",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "09_smoke",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "10_mimic",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "11_vhs",
      color: "2F2F4A",
      uniqsnd: !0,
    },
    {
      name: "12_traffic",
      color: "2F2F4A",
      uniqsnd: !0,
    },
    {
      name: "13_tromp",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "14_pulsar",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "15_pan",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "16_hiding",
      color: "6E0EA9",
      uniqsnd: !0,
    },
    {
      name: "17_talkbox",
      color: "6E0EA9",
      uniqsnd: !0,
    },
    {
      name: "18_electricity",
      color: "6E0EA9",
      uniqsnd: !0,
    },
    {
      name: "19_twoface",
      color: "6E0EA9",
      uniqsnd: !1,
    },
    {
      name: "20_ahuu",
      color: "6E0EA9",
      uniqsnd: !1,
    },
    {
      name: "21_biggest_boooo",
      color: "6E0EA9",
      uniqsnd: !0,
    },
    {
      name: "22_otamatone",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "23_piano",
      color: "2F2F4A",
      uniqsnd: !1,
    },
    {
      name: "24_mf_bacon",
      color: "6E0EA9",
      uniqsnd: !1,
    },
  ],
  bonusarray: [{
    name: "Carats",
    src: "b1-carats",
    code: "1,3,8,11,19",
    sound: "bonus-carats",
    aspire: "aspire-carats",
    loop: 4, // ← Every bonus have its own loops in this version
  },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...
export type Category = "LONG HAUL" | "REGIONAL HAUL" | "MIXED SERVICE" | "OFF ROAD";
export type Position = "STEER" | "DRIVE" | "TRAILER" | "ALL POSITION";

export interface SpecRow {
  size: string;
  liss: string;
  pr: string;
  rim: string;
  rimAlt: string;
  sw: string;
  od: string;
  rul: string;
  loadSingle: string;
  loadDual: string;
  ipKpa: string;
  ipPsi: string;
  otd: string;
}

export interface SpecTyre {
  code: string;
  position: Position;
  categories: Category[];
  image: string;
  tables: SpecRow[][];
}

const IMG = "https://mirror-ui-rebuild.lovable.app/assets";

export const specTyres: SpecTyre[] = [
  {
    code: "TRS07",
    position: "STEER",
    categories: ["LONG HAUL"],
    image: `${IMG}/trs07-D46gv39a.jpg`,
    tables: [[
      { size: "12R22.5", liss: "150/147L", pr: "16", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3350 / 7390", loadDual: "3075 / 6780", ipKpa: "830", ipPsi: "120", otd: "18.0" },
      { size: "12R22.5", liss: "152/149K", pr: "18", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3550 / 7830", loadDual: "3250 / 7160", ipKpa: "930", ipPsi: "135", otd: "18.0" },
    ]],
  },
  {
    code: "TRS01",
    position: "STEER",
    categories: ["LONG HAUL", "REGIONAL HAUL"],
    image: `${IMG}/trs01-7UeySR5Y.jpg`,
    tables: [[
      { size: "11R22.5", liss: "144/142M", pr: "14", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1054", rul: "491", loadSingle: "2800 / 6175", loadDual: "2650 / 5840", ipKpa: "720", ipPsi: "105", otd: "15.0" },
      { size: "11R22.5", liss: "146/143M", pr: "16", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1054", rul: "491", loadSingle: "3000 / 6610", loadDual: "2725 / 6005", ipKpa: "830", ipPsi: "120", otd: "15.0" },
      { size: "11R24.5", liss: "146/143M", pr: "14", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1104", rul: "516", loadSingle: "3000 / 6610", loadDual: "2725 / 6005", ipKpa: "720", ipPsi: "105", otd: "15.0" },
      { size: "11R24.5", liss: "149/146M", pr: "16", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1104", rul: "516", loadSingle: "3250 / 7160", loadDual: "3000 / 6610", ipKpa: "830", ipPsi: "120", otd: "15.0" },
      { size: "295/75R22.5", liss: "144/141M", pr: "14", rim: "9.00", rimAlt: "8.25", sw: "298", od: "1014", rul: "474", loadSingle: "2800 / 6175", loadDual: "2575 / 5675", ipKpa: "760", ipPsi: "110", otd: "15.0" },
      { size: "285/75R24.5", liss: "144/141M", pr: "14", rim: "8.25", rimAlt: "—", sw: "283", od: "1050", rul: "493", loadSingle: "2800 / 6175", loadDual: "2575 / 5675", ipKpa: "760", ipPsi: "110", otd: "15.0" },
      { size: "285/75R24.5", liss: "147/144L", pr: "16", rim: "8.25", rimAlt: "—", sw: "283", od: "1050", rul: "493", loadSingle: "3075 / 6780", loadDual: "2800 / 6175", ipKpa: "830", ipPsi: "120", otd: "15.0" },
    ]],
  },
  {
    code: "TR601H / TR696A",
    position: "STEER",
    categories: ["MIXED SERVICE"],
    image: `${IMG}/tr601h-tr696a-yd-WUOfq.jpg`,
    tables: [],
  },
  {
    code: "TRD02",
    position: "DRIVE",
    categories: ["LONG HAUL", "REGIONAL HAUL"],
    image: `${IMG}/trd02-8jep5FYc.jpg`,
    tables: [
      [
        { size: "295/80R22.5", liss: "152/148M", pr: "16", rim: "9.00", rimAlt: "8.25", sw: "298", od: "1044", rul: "487", loadSingle: "3550 / 7825", loadDual: "3150 / 6945", ipKpa: "850", ipPsi: "125", otd: "18.0" },
        { size: "295/80R22.5", liss: "154/151M", pr: "18", rim: "9.00", rimAlt: "8.25", sw: "298", od: "1044", rul: "487", loadSingle: "3750 / 8270", loadDual: "3450 / 7610", ipKpa: "900", ipPsi: "130", otd: "18.0" },
        { size: "315/80R22.5", liss: "154/151M", pr: "18", rim: "9.00", rimAlt: "9.75", sw: "312", od: "1076", rul: "500", loadSingle: "3750 / 8270", loadDual: "3450 / 7610", ipKpa: "830", ipPsi: "120", otd: "20.0" },
        { size: "315/80R22.5", liss: "157/154L", pr: "20", rim: "9.00", rimAlt: "9.75", sw: "312", od: "1076", rul: "500", loadSingle: "4125 / 9090", loadDual: "3750 / 8270", ipKpa: "900", ipPsi: "130", otd: "20.0" },
      ],
      [
        { size: "12R22.5", liss: "150/147L", pr: "16", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3350 / 7390", loadDual: "3075 / 6780", ipKpa: "830", ipPsi: "120", otd: "23.0" },
        { size: "12R22.5", liss: "152/149K", pr: "18", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3550 / 7830", loadDual: "3250 / 7160", ipKpa: "930", ipPsi: "135", otd: "23.0" },
      ],
    ],
  },
  {
    code: "TRD07",
    position: "DRIVE",
    categories: ["LONG HAUL"],
    image: `${IMG}/trd07-DQ2AZGZw.jpg`,
    tables: [[
      { size: "12R22.5", liss: "150/147L", pr: "16", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3350 / 7390", loadDual: "3075 / 6780", ipKpa: "830", ipPsi: "120", otd: "20.0" },
      { size: "12R22.5", liss: "152/149K", pr: "18", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3550 / 7830", loadDual: "3250 / 7160", ipKpa: "930", ipPsi: "135", otd: "20.0" },
    ]],
  },
  {
    code: "TRD01",
    position: "DRIVE",
    categories: ["REGIONAL HAUL", "MIXED SERVICE"],
    image: `${IMG}/trd01-Be3YoyoA.jpg`,
    tables: [[
      { size: "11R22.5", liss: "144/142M", pr: "14", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1054", rul: "491", loadSingle: "2800 / 6175", loadDual: "2650 / 5840", ipKpa: "720", ipPsi: "105", otd: "22.5" },
      { size: "11R22.5", liss: "146/143M", pr: "16", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1054", rul: "491", loadSingle: "3000 / 6610", loadDual: "2725 / 6005", ipKpa: "830", ipPsi: "120", otd: "22.5" },
      { size: "11R24.5", liss: "146/143M", pr: "14", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1104", rul: "516", loadSingle: "3000 / 6610", loadDual: "2725 / 6005", ipKpa: "720", ipPsi: "105", otd: "21.0" },
      { size: "11R24.5", liss: "149/146M", pr: "16", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1104", rul: "516", loadSingle: "3250 / 7160", loadDual: "3000 / 6610", ipKpa: "830", ipPsi: "120", otd: "21.0" },
    ]],
  },
  {
    code: "TRD03",
    position: "DRIVE",
    categories: ["OFF ROAD", "MIXED SERVICE"],
    image: `${IMG}/trd03-ClKpjBmT.jpg`,
    tables: [],
  },
  {
    code: "TRD21",
    position: "DRIVE",
    categories: ["LONG HAUL"],
    image: `${IMG}/trd21-CiqxBcE0.jpg`,
    tables: [[
      { size: "12R22.5", liss: "150/147L", pr: "16", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3350 / 7390", loadDual: "3075 / 6780", ipKpa: "830", ipPsi: "120", otd: "20.0" },
      { size: "12R22.5", liss: "152/149K", pr: "18", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3550 / 7830", loadDual: "3250 / 7160", ipKpa: "930", ipPsi: "135", otd: "20.0" },
    ]],
  },
  {
    code: "TRT01",
    position: "TRAILER",
    categories: ["LONG HAUL", "REGIONAL HAUL"],
    image: `${IMG}/trt01-Cg7v6ZIT.jpg`,
    tables: [[
      { size: "11R22.5", liss: "144/142M", pr: "14", rim: "8.25", rimAlt: "7.50", sw: "279", od: "1054", rul: "491", loadSingle: "2800 / 6175", loadDual: "2650 / 5840", ipKpa: "720", ipPsi: "105", otd: "11.0" },
      { size: "12R22.5", liss: "150/147L", pr: "16", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3350 / 7390", loadDual: "3075 / 6780", ipKpa: "830", ipPsi: "120", otd: "16.0" },
      { size: "255/70R22.5", liss: "140/137M", pr: "16", rim: "7.50", rimAlt: "8.25", sw: "255", od: "930", rul: "435", loadSingle: "2500 / 5510", loadDual: "2300 / 5070", ipKpa: "830", ipPsi: "120", otd: "13.0" },
    ]],
  },
  {
    code: "TRA22",
    position: "ALL POSITION",
    categories: ["MIXED SERVICE"],
    image: `${IMG}/tra22-BimxE42p.jpg`,
    tables: [[
      { size: "12R22.5", liss: "150/147L", pr: "16", rim: "9.00", rimAlt: "8.25", sw: "300", od: "1085", rul: "504", loadSingle: "3350 / 7390", loadDual: "3075 / 6780", ipKpa: "830", ipPsi: "120", otd: "15.5" },
    ]],
  },
  {
    code: "TRA21",
    position: "ALL POSITION",
    categories: ["MIXED SERVICE", "OFF ROAD"],
    image: `${IMG}/tra21-DtjMBw1j.jpg`,
    tables: [[
      { size: "11.00R20", liss: "150/147K", pr: "16", rim: "8.0", rimAlt: "8.5, 8.00V", sw: "293", od: "1085", rul: "499", loadSingle: "3350 / 7390", loadDual: "3075 / 6780", ipKpa: "830", ipPsi: "120", otd: "16.0" },
    ]],
  },
  {
    code: "TR657 / TR668",
    position: "ALL POSITION",
    categories: ["MIXED SERVICE", "OFF ROAD"],
    image: `${IMG}/tr657-tr668-CGGBmssC.jpg`,
    tables: [],
  },
];

export const categories: Category[] = ["LONG HAUL", "REGIONAL HAUL", "MIXED SERVICE", "OFF ROAD"];
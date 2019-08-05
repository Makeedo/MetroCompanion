var stations = {
    u1: {
        reumannplatz: {name: "Reumannplatz",line: "U1", nodeName: "U1_REU"},
        kepplerplatz: {name: "Kepplerplatz",line: "U1", nodeName: "U1_KEP"},
        hauptbahnhof: {name: "Hauptbahnhof",line: "U1", nodeName: "U1_HAU"},
        taubstummengasse: {name: "Taubstummengasse",line: "U1", nodeName: "U1_TAU"},
        karlsplatz: {name: "Karlsplatz",line: "U1", nodeName: "U1_KAR"},
        stephansplatz: {name: "Stephansplatz",line: "U1", nodeName: "U1_STE"},
        schwedenplatz: {name: "Schwedenplatz",line: "U1", nodeName: "U1_SWE"},
        nestroyPlatz: {name: "Nestroyplatz",line: "U1", nodeName: "U1_NES"},
        praterstern: {name: "Praterstern",line: "U1", nodeName: "U1_PRA"},
        vorgartenstrasse: {name: "Vorgartenstraße",line: "U1", nodeName: "U1_VOR"},
        donauinsel: {name: "Donauinsel",line: "U1", nodeName: "U1_DON"},
        kaisermuehlen: {name: "Kaisermühlen",line: "U1", nodeName: "U1_KAI"},
        alte_donau: {name: "Alte Donau",line: "U1", nodeName: "U1_ADN"},
        kagran: {name: "Kagran",line: "U1", nodeName: "U1_KAG"},
        kagranerplatz: {name: "Kagraner Platz",line: "U1", nodeName: "U1_KAP"},
        rennbahnweg: {name: "Rennbahnweg",line: "U1", nodeName: "U1_REN"},
        aderklaaer_strasse: {name: "Aderklaaer Straße",line: "U1", nodeName: "U1_ADE"},
        grossfeldsiedlung: {name: "Großfeldsiedlung",line: "U1", nodeName: "U1_GFS"},
        leopoldau: {name: "Leopoldau",line: "U1", nodeName: "U1_LEO"}
    },
    u2: {
        karlsplatz: {name: "Karlsplatz",line: "U2", nodeName: "U2_KAR"},
        museumsquartier: {name: "Museumsquartier",line: "U2", nodeName: "U2_MUS"},
        volkstheater: {name: "Volkstheater",line: "U2", nodeName: "U2_VOR"},
        rathaus: {name: "Rathaus",line: "U2", nodeName: "U2_RAT"},
        schottentor: {name: "Schottentor",line: "U2", nodeName: "U2_UNI"},
        schottenring: {name: "Schottenring",line: "U2", nodeName: "U2_STR"},
        taborstrasse: {name: "Taborstraße",line: "U2", nodeName: "U2_TAB"},
        praterstern: {name: "Pratern",line: "U2", nodeName: "U2_PRA"},
        messe_prater: {name: "Messe-Prater",line: "U2", nodeName: "U2_MEP"},
        krieau: {name: "Krieau",line: "U2", nodeName: "U2_KRI"},
        stadion: {name: "Stadion",line: "U2", nodeName: "U2_STA"},
        donaumarina: {name: "Donaumarina",line: "U2", nodeName: "U2_DNM"},
        donaustadtbruecke: {name: "Donaustadtbrücke",line: "U2", nodeName: "U2_DSB"},
        stadlau: {name: "Stadlau",line: "U2", nodeName: "U2_STL"},
        hardeggasse: {name: "Hardeggasse",line: "U2", nodeName: "U2_HDG"},
        donauspital: {name: "Donauspital",line: "U2", nodeName: "U2_DNS"},
        aspernstrasse: {name: "Aspernstraße",line: "U2", nodeName: "U2_ASP"},
        hausfeldstrasse: {name: "Hausfeldstraße",line: "U2", nodeName: "U2_HAU"},
        aspern_nord: {name: "Aspern Nord",line: "U2", nodeName: "U2_ASP"},
        seestadt: {name: "Seestadt",line: "U2", nodeName: "U2_SEE"},
    },
    u3: {
        ottakring: {name: "Ottakring",line: "U3", nodeName: "U3_OTT"},
        kendlerstrasse: {name: "Kendlerstrasse",line: "U3", nodeName: "U3_KEN"},
        huetteldorferstrasse: {name: "Hütteldorfer Straße",line: "U3", nodeName: "U3_HUE"},
        johnstrasse: {name: "Johnstraße",line: "U3", nodeName: "U3_JOH"},
        schweglerstrasse: {name: "Schweglerstraße",line: "U3", nodeName: "U3_SWE"},
        westbahnhof: {name: "Westbahnhof",line: "U3", nodeName: "U3_WES"},
        zieglergasse: {name: "Zieglergasse",line: "U3", nodeName: "U3_ZIE"},
        neubaugasse: {name: "Neubaugasse",line: "U3", nodeName: "U3_NEU"},
        volkstheater: {name: "Volkstheater",line: "U3", nodeName: "U3_VOL"},
        herrengasse: {name: "Herrengasse",line: "U3", nodeName: "U3_HER"},
        stephansplatz: {name: "Stephansplatz",line: "U3", nodeName: "U3_STE"},
        stubentor: {name: "Stubentor",line: "U3", nodeName: "U3_STU"},
        landstrasse: {name: "Landstraße",line: "U3", nodeName: "U3_LAN"},
        rochusgasse: {name: "Rochusgasse",line: "U3", nodeName: "U3_ROC"},
        kardinal_nagl_platz: {name: "Kardinal-Nagl-Platz",line: "U3", nodeName: "U3_KAR"},
        schlachthausgasse: {name: "Schlachthausgasse",line: "U3", nodeName: "U3_SLA"},
        erdberg: {name: "Erdberg",line: "U3", nodeName: "U3_ERD"},
        gasometer: {name: "Gasometer",line: "U3", nodeName: "U3_GAS"},
        zippererstrasse: {name: "Zippererstraße",line: "U3", nodeName: "U3_ZIP"},
        enkplatz: {name: "Enkplatz",line: "U3", nodeName: "U3_ENK"},
        simmering: {name: "Simmering",line: "U3", nodeName: "U3_SIM"},
    },
    u4: {
        huetteldorf: {name: "Hütteldorf",line: "U4"},
        oberstveit: {name: "Ober St. Veit",line: "U4"},
        unterstveit: {name: "Unter St. Veit",line: "U4"},
        braunschweiggasse: {name: "Braunschweiggasse",line: "U4"},
        hietzing: {name: "Hietzing",line: "U4"},
        schoenbrunn: {name: "Schönbrunn",line: "U4"},
        meidling_hauptstrasse: {name: "Meidling Hauptstraße",line: "U4"},
        laengenfeldgasse: {name: "Längenfeldgasse",line: "U4"},
        margaretenguertel: {name: "Margaretengürtel",line: "U4"},
        pilgramgasse: {name: "Pilgramgasse",line: "U4"},
        kettenbrueckengasse: {name: "Kettenbrückengasse",line: "U4"},
        karlsplatz: {name: "Karlsplatz",line: "U4"},
        stadtpark: {name: "Stadtpark",line: "U4"},
        landstrasse: {name: "Landstraße",line: "U4"},
        schwedenplatz: {name: "Schwedenplatz",line: "U4"},
        schottenring : {name: "Schottenring",line: "U4"},
        rossauser_laende : {name: "Rossauer Lände",line: "U4"},
        friedensbruecke : {name: "Friedensbrücke",line: "U4"},
        spittelau : {name: "Spittelau",line: "U4"},
        heiligenstadt : {name: "Heiligenstadt",line: "U4"},
    },
    u6: {
        siebenhirten: {name: "Siebenhirten",line: "U6"},
        perfektastrasse: {name: "Perfektastraße",line: "U6"},
        erlaaer_strasse: {name: "Erlaaer Straße",line: "U6"},
        alterlaa: {name: "Alterlaa",line: "U6"},
        am_schoepfwerk: {name: "Am Schöpfwerk",line: "U6"},
        tscherttegasse: {name: "Tscherttegasse",line: "U6"},
        bahnhof_meidling: {name: "Bahnhof Meidling",line: "U6"},
        niederhofstrasse: {name: "Niederhofstraße",line: "U6"},
        laengenfeldgasse: {name: "Längenfeldgasse",line: "U6"},
        gumpendorferstrasse: {name: "Gumpendorferstrasse",line: "U6"},
        westbahnhof: {name: "Westbahnhof",line: "U6"},
        burggasse_stadthalle: {name: "Burggasse-Stadthalle",line: "U6"},
        thaliastrasse: {name: "Thaliastrasse",line: "U6"},
        josefstaedter_strasse: {name: "Josefstädter Straße",line: "U6"},
        alser_strasse: {name: "Alser Straße",line: "U6"},
        michelbeuern_akh: {name: "Michelbeuern-AKH",line: "U6"},
        waehringer_strasse_volksoper: {name: "Währinger Straße-Volksoper",line: "U6"},
        nussdorfer_strasse: {name: "Nußdorfer Straße",line: "U6"},
        spittelau: {name: "Spittelau",line: "U6"},
        jaegerstrasse: {name: "Jägerstraße",line: "U6"},
        dresdner_strasse: {name: "Dresdner straße",line: "U6"},
        handelskai: {name: "Handelskai",line: "U6"},
        neue_donau: {name: "Neue Donau",line: "U6"},
        floridsdorf: {name: "Floridsdorf",line: "U6"},
    },
    junctions: {
        karlsplatz: {name: "Karlsplatz", lines: ["u1", "u2", "u4"]},
        stephansplatz: {name: "Stephansplatz", lines: ["u1", "u3"]},
        schwedenplatz: {name: "Schwedenplatz", lines: ["u1", "u4"]},
    }

};

var nodeToStationMap = {
    "U1_REU": stations.u1.reumannplatz,
    "U1_KEP": stations.u1.kepplerplatz,
    "U1_HAU": stations.u1.hauptbahnhof,
    "U1_TAU": stations.u1.taubstummengasse,
    "U1_KAR": stations.u1.karlsplatz,
    "U2_KAR": stations.u2.karlsplatz,
    "U4_KAR": stations.u4.karlsplatz,
    "START_KAR": stations.junctions.karlsplatz,
    "STOP_KAR": stations.junctions.karlsplatz,
    "U1_STE": stations.u1.stephansplatz,
    "U3_STE": stations.u3.stephansplatz,
    "START_STE": stations.junctions.stephansplatz,
    "STOP_STE": stations.junctions.stephansplatz,
    "U1_SWE": stations.u1.schwedenplatz,
    "U4_SWE": stations.u4.schwedenplatz,
    "START_SWE": stations.junctions.schwedenplatz,
    "STOP_SWE": stations.junctions.schwedenplatz,
};

var map = {

    // ====== LINIE U1 =========
    "U1_REU": {         //REUMANNPLATZ
        "U1_KEP": 1     //travel time to Kepplerplatz in minutes
    },
    "U1_KEP": {         //KEPPLERPLATZ
        "U1_HAU": 2,    //travel time to Hauptbahnhof in minutes
        "U1_REU": 1     //travel time to Reumannplatz in minutes
    },
    "U1_HAU": {         //HAUPTBAHNHOF
        "U1_TAU": 1,    //travel time to Taubstummengasse in minutes
        "U1_KEP": 2     //travel time to Kepplerplatz in minutes
    },
    "U1_TAU": {         //TAUBSTUMMENGASSE
        "U1_KAR": 2,    //travel time to Karlsplatz in minutes
        "U1_HAU": 1     //travel time to Hauptbahnhof in minutes
    },
    "U1_KAR": {         //KARLSPLATZ
        "U1_STE": 2,    //travel time to Stefansplatz in minutes
        "U1_TAU": 2,    //travel time to Taubstummengasse in minutes
        "U2_MUS": 5,    //transfer time to U2 Karlsplatz in minutes
        "U4_KET": 5,    //transfer time to u4 Karlsplatz in minutes
        "U4_STA": 5,    //transfer time to u4 Karlsplatz in minutes
        "STOP_KAR": 0
    },
    "U1_STE": {         //STEPHANSPLATZ
        "U1_SWE": 1,    //travel time to Schwedenplatz in minutes
        "U1_KAR": 2,    //travel time to Karlsplatz in minutes
        "U3_HER": 5,    //transfer time to U3 Stephansplatz in minutes
        "U3_STU": 5,    //transfer time to U3 Stephansplatz in minutes
        "STOP_STE": 0
    },
    "U1_SWE": {         //SCHWEDENPLATZ
        "U1_NES": 1,    //travel time to Nestroyplatz in minutes
        "U1_STE": 1,    //travel time to Stephansplatz in minutes
        "U4_STR": 5,    //transfer time to U4 Schwedenplatz in minutes
        "U4_LAN": 5,    //transfer time to U4 Schwedenplatz in minutes
        "STOP_SWE": 0
    },
    "U1_NES": {         //NESTROYPLATZ
        "U1_PRA": 1,    //travel time to Praterstern in minutes
        "U1_SWE": 1,    //travel time to Schwedenplatz in minutes
    },
    "U1_PRA": {         //PRATERSTERN
        "U1_VOR": 1,    //travel time to Vorgartenstraße in minutes
        "U1_NES": 1,    //travel time to Nestroyplatz in minutes
        "U2_TAB": 5,    //transfer time to U2 Praterstern in minutes
        "U2_MEP": 5,    //transfer time to U2 Praterstern in minutes
        "STOP_PRA": 0
    },
    "U1_VOR": {         //VORGARTENSTRASSE
        "U1_DON": 2,    //travel time to Praterstern in minutes
        "U1_PRA": 1,    //travel time to Donauinsel in minutes
    },
    "U1_DON": {         //DONAUINSEL
        "U1_KAI": 1,    //travel time to Kaisermühlen in minutes
        "U1_VOR": 2,    //travel time to Vorgartenstraße in minutes
    },
    "U1_KAI": {         //KAISERMÜHLEN
        "U1_ADN": 2,    //travel time to Alte Donau in minutes
        "U1_DON": 1,    //travel time to Donauinsel in minutes
    },
    "U1_ADN": {         //ALTE DONAU
        "U1_KAG": 1,    //travel time to Kagran in minutes
        "U1_KAI": 2,    //travel time to Kaisermühlen in minutes
    },
    "U1_KAG": {         //KAGRAN
        "U1_KAP": 2,    //travel time to Kagraner Platz in minutes
        "U1_ADN": 1,    //travel time to Alte Donau in minutes
    },
    "U1_KAP": {         //KAGRANER PLATZ
        "U1_REN": 2,    //travel time to Rennbahnweg in minutes
        "U1_KAG": 2,    //travel time to Kagran in minutes
    },
    "U1_REN": {         //RENNBAHNWEG
        "U1_ADE": 1,    //travel time to Aderklaaer Straße in minutes
        "U1_KAP": 2,    //travel time to Kagraner Platz in minutes
    },
    "U1_ADE": {         //ADERKLAAER STRAße
        "U1_GFS": 1,    //travel time to Großfeldsiedlung in minutes
        "U1_REN": 1,    //travel time to Rennbahnweg Platz in minutes
    },
    "U1_GFS": {         //GROßFELDSIEDLUNG
        "U1_LEO": 2,    //travel time to Leopoldau in minutes
        "U1_ADE": 1,    //travel time to Aderklaaer Straße Platz in minutes
    },
    "U1_LEO": {         //LEOPOLDAU
        "U1_GFS": 2,    //travel time to Großfeldsiedlung in minutes
    },


    // ====== LINIE U2 =========
    "U2_KAR": {         //KARLSPLATZ
        "U2_MUS": 2,    //travel time to Museumsquartier in minutes
        "U1_TAU": 5,    //transfer time to U1 Karlsplatz in minutes
        "U1_STE": 5,     //transfer time to U4 Karlsplatz in minutes
        "U4_KET": 5,     //transfer time to U4 Karlsplatz in minutes
        "U4_STA": 5,     //transfer time to U4 Karlsplatz in minutes
        "STOP_KAR": 0
    },
    "U2_MUS": {         //MUSEUMSQUARTIER
        "U2_VOL": 1,    //travel time to Museumsquartier in minutes
        "U2_KAR": 2,    //travel time to Karlsplatz in minutes
    },
    "U2_VOL": {         //VOLKSTHEATER
        "U2_RAT": 2,    //travel time to Rathaus in minutes
        "U2_MUS": 1,    //travel time to Museumsquartier in minutes
        "U3_NEU": 5,    //transfer time to U3 Volkstheater in minutes
        "U3_HER": 5,    //transfer time to U3 Volkstheater in minutes
        "STOP_VOL": 0
    },
    "U2_RAT": {         //RATHAUS
        "U2_UNI": 2,    //travel time to Schottentor-Universität in minutes
        "U2_VOL": 2,    //travel time to Volkstheater in minutes
    },
    "U2_UNI": {         //SCHOTTENTOR-UNIVERSITÄT
        "U2_STR": 1,    //travel time to Schottenring in minutes
        "U2_RAT": 2,    //travel time to Rathaus in minutes
    },
    "U2_STR": {         //SCHOTTENRING
        "U2_TAB": 1,    //travel time to Taborstraße in minutes
        "U2_UNI": 1,    //travel time to Schottentor-Universität in minutes
        "U4_ROS": 5,    //transfer time to U4 Schottenring in minutes
        "U4_SWE": 5,    //transfer time to U4 Schottenring in minutes
        "STOP_STR": 0
    },
    "U2_TAB": {         //TABORSTRAßE
        "U2_PRA": 2,    //travel time to Praterstern in minutes
        "U2_STR": 1,    //travel time to Schottenring in minutes
    },
    "U2_PRA": {         //PRATERSTERN
        "U2_MEP": 2,    //travel time to Messe-Prater in minutes
        "U2_TAB": 2,    //travel time to Taborstraße in minutes
        "U1_NES": 5,     //transfer time to U1 Praterstern
        "U1_VOR": 5,     //transfer time to U1 Praterstern
        "STOP_PRA": 0
    },
    "U2_MEP": {         //MESSE-PRATER
        "U2_KRI": 1,    //travel time to Krieau in minutes
        "U2_PRA": 2,    //travel time to Praterstern in minutes
    },
    "U2_KRI": {         //KRIEAU
        "U2_STA": 1,    //travel time to Stadion in minutes
        "U2_MEP": 1,    //travel time to Messe-Prater in minutes
    },
    "U2_STA": {         //STADION
        "U2_DNM": 2,    //travel time to Donaumarina in minutes
        "U2_KRI": 1,    //travel time to Krieau in minutes
    },
    "U2_DNM": {         //DONAUMARINA
        "U2_DSB": 1,    //travel time to Donaustadtbrücke in minutes
        "U2_STA": 2,    //travel time to Stadion in minutes
    },
    "U2_DSB": {         //DONAUSTADTBRÜCKE
        "U2_STL": 2,    //travel time to Stadlau in minutes
        "U2_DNM": 1,    //travel time to Stadion in minutes
    },
    "U2_STL": {         //STADLAU
        "U2_HDG": 1,    //travel time to Hardeggasse in minutes
        "U2_DSB": 2,    //travel time to Donaustadtbrücke in minutes
    },
    "U2_HDG": {         //HARDEGGASSE
        "U2_DNS": 1,    //travel time to Donauspital in minutes
        "U2_STL": 1,    //travel time to Stadlau in minutes
    },
    "U2_DNS": {         //DONAUSPITAL
        "U2_ASP": 1,    //travel time to Aspernstraße in minutes
        "U2_HDG": 1,    //travel time to Hardeggasse in minutes
    },
    "U2_ASP": {         //ASPERNSTRAßE
        "U2_HAU": 2,    //travel time to Hausfeldstraße in minutes
        "U2_DNS": 1,    //travel time to Donauspital in minutes
    },
    "U2_HAU": {         //HAUSFELDSTRAßE
        "U2_ASN": 2,    //travel time to Aspern Nord in minutes
        "U2_ASP": 2,    //travel time to Donauspital in minutes
    },
    "U2_ASN": {         //ASPERN NORD
        "U2_SEE": 2,    //travel time to Seestadt in minutes
        "U2_HAU": 2,    //travel time to Hausfeldstraße in minutes
    },
    "U2_SEE": {         //SEESTADT
        "U2_ASN": 2,    //travel time to Aspern Nord in minutes
    },


    // ====== LINIE U3 =========
    "U3_OTT": {         //OTTAKRING
        "U3_KEN": 1,    //travel time to Kendlerstraße in minutes
    },
    "U3_KEN": {         //KENDLERSTRASSE
        "U3_HUE": 1,    //travel time to Hütteldorferstraße in minutes
        "U3_OTT": 1,    //travel time to Ottakring in minutes
    },
    "U3_HUE": {         //HÜTTELDORFERSTRASSE
        "U3_JOH": 1,    //travel time to Johnstraße in minutes
        "U3_KEN": 1,    //travel time to Kendlerstraße in minutes
    },
    "U3_JOH": {         //JOHNSTRASSE
        "U3_SWE": 2,    //travel time to Schweglerstraße in minutes
        "U3_HUE": 1,    //travel time to Hütteldorferstraße in minutes
    },
    "U3_SWE": {         //SCHWEGLERSTRASSE
        "U3_WES": 2,    //travel time to Westbahnhof in minutes
        "U3_JOH": 2,    //travel time to Johnstraße in minutes
    },
    "U3_WES": {         //WESTBAHNHOF
        "U3_ZIE": 1,    //travel time to Zieglergasse in minutes
        "U3_SWE": 2,    //travel time to Schweglerstraße in minutes
        "U6_GUM": 5,    //transfer time to U6 Westbahnhof in minutes
        "U6_BUR": 5,    //transfer time to U6 Westbahnhof in minutes
        "STOP_WES": 0  //Node to navigate to if Westbahnhof was destination
    },
    "U3_ZIE": {         //ZIEGLERGASSE
        "U3_NEU": 1,    //travel time to Neubaugasse in minutes
        "U3_WES": 1,    //travel time to Westbahnhof in minutes
    },
    "U3_NEU": {         //NEUBAUGASSE
        "U3_VOL": 1,    //travel time to Volkstheater in minutes
        "U3_ZIE": 1,    //travel time to Zieglergasse in minutes
    },
    "U3_VOL": {         //VOLKSTHEATER
        "U3_HER": 1,    //travel time to Herrengasse in minutes
        "U3_NEU": 1,    //travel time to Neubaugasse in minutes
        "U2_MUS": 5,    //transfer time to U2 Volkstheater in minutes
        "U2_RAT": 5,    //transfer time to U2 Volkstheater in minutes
        "STOP_VOL": 0
    },
    "U3_HER": {         //HERRENGASSE
        "U3_STE": 2,    //travel time to Stephansplatz in minutes
        "U3_VOL": 1,    //travel time to Volkstheater in minutes
    },
    "U3_STE": {         //STEPHANSPLAZ
        "U3_STU": 1,    //travel time to Stubentor in minutes
        "U3_HER": 2,    //travel time to Herrengasse in minutes
        "U1_SWE": 5,    //transfer time to U1 Stephansplatz in minutes
        "U1_KAR": 5,    //transfer time to U1 Stephansplatz in minutes
        "STOP_STE": 0
    },
    "U3_STU": {         //STUBENTOR
        "U3_LAN": 1,    //travel time to Landstraße in minutes
        "U3_STE": 1,    //travel time to Stephansplatz in minutes
    },
    "U3_LAN": {         //LANDSTRASSE
        "U3_ROC": 2,    //travel time to Rochusgasse in minutes
        "U3_STU": 1,    //travel time to Landstraße in minutes
        "U4_SWE": 5,    //travel time to Landstraße in minutes
        "U4_STA": 5,    //travel time to Landstraße in minutes
        "STOP_LAN": 0
    },
    "U3_ROC": {         //ROCHUSGASSE
        "U3_KAR": 1,    //travel time to Kardinal-Nagl-Platz in minutes
        "U3_LAN": 2,    //travel time to Landstraße in minutes
    },
    "U3_KAR": {         //KARDINAL-NAGL-PLATZ
        "U3_SLA": 1,    //travel time to Schlachthausgasse in minutes
        "U3_ROC": 1,    //travel time to Rochusgasse in minutes
    },
    "U3_SLA": {         //SCHLACHTHAUSGASSE
        "U3_ERD": 1,    //travel time to Erdberg in minutes
        "U3_KAR": 1,    //travel time to Kardinal-Nagl-Platz in minutes
    },
    "U3_ERD": {         //ERDBERG
        "U3_GAS": 2,    //travel time to Gasometer minutes
        "U3_SLA": 1,    //travel time to Schlachthausgasse in minutes
    },
    "U3_GAS": {         //GASOMETER
        "U3_ZIP": 1,    //travel time to Zippererstraße minutes
        "U3_ERD": 2,    //travel time to Erdberg in minutes
    },
    "U3_ZIP": {         //ZIPPERERSTRASSE
        "U3_ENK": 1,    //travel time to Enkplatz minutes
        "U3_GAS": 1,    //travel time to Gasometer in minutes
    },
    "U3_ENK": {         //ENKPLATZ
        "U3_SIM": 1,    //travel time to Simmering minutes
        "U3_ZIP": 1,    //travel time to Zippererstraße in minutes
    },
    "U3_SIM": {         //SIMMERING
        "U3_ENK": 1,    //travel time to Enkplatz minutes
    },


    // ====== LINIE U4 =========
    "U4_HUE": {         //SIMMERING
        "U4_OSV": 2,    //travel time to Enkplatz minutes
    },
    "U4_OSV": {         //SIMMERING
        "U4_USV": 1,    //travel time to Enkplatz minutes
        "U4_HUE": 2,    //travel time to Enkplatz minutes
    },
    "U4_USV": {         //SIMMERING
        "U4_BRA": 2,    //travel time to Enkplatz minutes
        "U4_OSV": 2,    //travel time to Enkplatz minutes
    },
    "U4_BRA": {         //SIMMERING
        "U4_HIE": 1,    //travel time to Enkplatz minutes
        "U4_USV": 2,    //travel time to Enkplatz minutes
    },
    "U4_HIE": {         //SIMMERING
        "U4_SBR": 2,    //travel time to Enkplatz minutes
        "U4_BRA": 1,    //travel time to Enkplatz minutes
    },
    "U4_SBR": {         //SIMMERING
        "U4_MDH": 1,    //travel time to Enkplatz minutes
        "U4_HIE": 2,    //travel time to Enkplatz minutes
    },
    "U4_MDH": {         //SIMMERING
        "U4_LFG": 1,    //travel time to Enkplatz minutes
        "U4_SBR": 1,    //travel time to Enkplatz minutes
    },
    "U4_LFG": {         //SIMMERING
        "U4_MAR": 2,    //travel time to Enkplatz minutes
        "U4_MDH": 1,    //travel time to Enkplatz minutes
        "U6_GUM": 5,    //travel time to Enkplatz minutes
        "U6_NIE": 5,    //travel time to Enkplatz minutes
        "STOP_LFG": 0
    },
    "U4_MAR": {         //SIMMERING
        "U4_PIL": 2,    //travel time to Enkplatz minutes
        "U4_LFG": 2,    //travel time to Enkplatz minutes
    },
    "U4_PIL": {         //SIMMERING
        "U4_KET": 1,    //travel time to Enkplatz minutes
        "U4_MAR": 2,    //travel time to Enkplatz minutes
    },
    "U4_KET": {         //SIMMERING
        "U4_KAR": 2,    //travel time to Enkplatz minutes
        "U4_PIL": 2,    //travel time to Enkplatz minutes
    },
    "U4_KAR": {         //SIMMERING
        "U4_STA": 2,    //travel time to Enkplatz minutes
        "U4_KET": 2,    //travel time to Enkplatz minutes
        "U1_TAU": 5,    //travel time to Enkplatz minutes
        "U1_STE": 5,    //travel time to Enkplatz minutes
        "U2_MUS": 5,    //travel time to Enkplatz minutes
        "STOP_KAR": 0
    },
    "U4_STA": {         //SIMMERING
        "U4_LAN": 1,    //travel time to Enkplatz minutes
        "U4_KAR": 2,    //travel time to Enkplatz minutes
    },
    "U4_LAN": {         //SIMMERING
        "U4_SWE": 2,    //travel time to Enkplatz minutes
        "U4_STA": 1,    //travel time to Enkplatz minutes
        "U3_STU": 5,    //travel time to Enkplatz minutes
        "U3_ROC": 5,    //travel time to Enkplatz minutes
        "STOP_LAN": 0
    },
    "U4_SWE": {         //SIMMERING
        "U4_STR": 1,    //travel time to Enkplatz minutes
        "U4_LAN": 2,    //travel time to Enkplatz minutes
        "U1_STE": 5,    //travel time to Enkplatz minutes
        "U1_NES": 5,    //travel time to Enkplatz minutes
        "STOP_SWE": 0
    },
    "U4_STR": {         //SIMMERING
        "U4_ROS": 2,    //travel time to Enkplatz minutes
        "U4_SWE": 1,    //travel time to Enkplatz minutes
        "U2_UNI": 5,    //travel time to Enkplatz minutes
        "U2_TAB": 5,    //travel time to Enkplatz minutes
        "STOP_STR": 0
    },
    "U4_ROS": {         //SIMMERING
        "U4_FRI": 1,    //travel time to Enkplatz minutes
        "U4_STR": 2,    //travel time to Enkplatz minutes
    },
    "U4_FRI": {         //SIMMERING
        "U4_SPI": 1,    //travel time to Enkplatz minutes
        "U4_ROS": 1,    //travel time to Enkplatz minutes
    },
    "U4_SPI": {         //SIMMERING
        "U4_HEI": 2,    //travel time to Enkplatz minutes
        "U4_FRI": 1,    //travel time to Enkplatz minutes
        "U6_NUS": 5,    //travel time to Enkplatz minutes
        "U6_JAE": 5,    //travel time to Enkplatz minutes
        "STOP_SPI": 0
    },
    "U4_HEI": {         //SIMMERING
        "U4_SPI": 2,    //travel time to Enkplatz minutes
    },



    // ===== LINIE U6
    "U6_SIE": {         //SIMMERING
        "U6_PER": 1,    //travel time to Enkplatz minutes
    },
    "U6_PER": {         //SIMMERING
        "U6_ERL": 1,    //travel time to Enkplatz minutes
        "U6_SIE": 1,    //travel time to Enkplatz minutes
    },
    "U6_ERL": {         //SIMMERING
        "U6_AER": 2,    //travel time to Enkplatz minutes
        "U6_PER": 1,    //travel time to Enkplatz minutes
    },
    "U6_AER": {         //SIMMERING
        "U6_ASW": 2,    //travel time to Enkplatz minutes
        "U6_ERL": 2,    //travel time to Enkplatz minutes
    },
    "U6_ASW": {         //SIMMERING
        "U6_TSC": 1,    //travel time to Enkplatz minutes
        "U6_AER": 2,    //travel time to Enkplatz minutes
    },
    "U6_TSC": {         //SIMMERING
        "U6_BHM": 2,    //travel time to Enkplatz minutes
        "U6_ASW": 1,    //travel time to Enkplatz minutes
    },
    "U6_BHM": {         //SIMMERING
        "U6_NIE": 2,    //travel time to Enkplatz minutes
        "U6_ASW": 2,    //travel time to Enkplatz minutes
    },
    "U6_NIE": {         //SIMMERING
        "U6_LFG": 1,    //travel time to Enkplatz minutes
        "U6_BHM": 2,    //travel time to Enkplatz minutes
    },
    "U6_LFG": {         //SIMMERING
        "U6_GUM": 2,    //travel time to Enkplatz minutes
        "U6_NIE": 1,    //travel time to Enkplatz minutes
        "U4_MDH": 5,
        "U4_MAR": 5,
        "STOP_LFG": 0
    },
    "U6_GUM": {         //SIMMERING
        "U6_WES": 1,    //travel time to Enkplatz minutes
        "U6_LFG": 2,    //travel time to Enkplatz minutes
    },
    "U6_WES": {         //SIMMERING
        "U6_BUR": 2,    //travel time to Enkplatz minutes
        "U6_GUM": 1,    //travel time to Enkplatz minutes
        "U3_SWE": 5,    //travel time to Enkplatz minutes
        "U3_ZIE": 5,    //travel time to Enkplatz minutes
        "STOP_WES": 0
    },
    "U6_BUR": {         //SIMMERING
        "U6_THA": 1,    //travel time to Enkplatz minutes
        "U6_WES": 2,    //travel time to Enkplatz minutes
    },
    "U6_THA": {         //SIMMERING
        "U6_JOS": 1,    //travel time to Enkplatz minutes
        "U6_BUR": 1,    //travel time to Enkplatz minutes
    },
    "U6_JOS": {         //SIMMERING
        "U6_ALS": 2,    //travel time to Enkplatz minutes
        "U6_THA": 1,    //travel time to Enkplatz minutes
    },
    "U6_ALS": {         //SIMMERING
        "U6_MLB": 1,    //travel time to Enkplatz minutes
        "U6_JOS": 2,    //travel time to Enkplatz minutes
    },
    "U6_MLB": {         //SIMMERING
        "U6_WAE": 2,    //travel time to Enkplatz minutes
        "U6_ALS": 1,    //travel time to Enkplatz minutes
    },
    "U6_WAE": {         //SIMMERING
        "U6_NUS": 1,    //travel time to Enkplatz minutes
        "U6_MLB": 2,    //travel time to Enkplatz minutes
    },
    "U6_NUS": {         //SIMMERING
        "U6_SPI": 2,    //travel time to Enkplatz minutes
        "U6_WAE": 1,    //travel time to Enkplatz minutes
    },
    "U6_SPI": {         //SIMMERING
        "U6_JAE": 1,    //travel time to Enkplatz minutes
        "U6_NUS": 2,    //travel time to Enkplatz minutes
        "U4_HEI": 5,    //travel time to Enkplatz minutes
        "U4_FRI": 5,    //travel time to Enkplatz minutes
        "STOP_SPI": 0,
    },
    "U6_JAE": {         //SIMMERING
        "U6_DRE": 2,    //travel time to Enkplatz minutes
        "U6_SPI": 1,    //travel time to Enkplatz minutes
    },
    "U6_DRE": {         //SIMMERING
        "U6_HAN": 1,    //travel time to Enkplatz minutes
        "U6_JAE": 2,    //travel time to Enkplatz minutes
    },
    "U6_HAN": {         //SIMMERING
        "U6_NEU": 1,    //travel time to Enkplatz minutes
        "U6_DRE": 1,    //travel time to Enkplatz minutes
    },
    "U6_NEU": {         //SIMMERING
        "U6_FLO": 1,    //travel time to Enkplatz minutes
        "U6_HAN": 1,    //travel time to Enkplatz minutes
    },
    "U6_FLO": {         //SIMMERING
        "U6_NEU": 1     //travel time to Enkplatz minutes
    },


    /* ===== START / DESTINATION NODES AT JUNCTIONS =====
     *
     * for junctions, each line has a its separate node that represents this junction
     * from the perspective of travelling on this line.
     * The costs for transfer are higher than the costs for staying on the same line.
     *
     * i.e: Karlsplatz has in fact 3 nodes (one for each line) with different costs on their connections
     * if the requested route starts or stops at a junction, we have to add a start and a stop node for
     * each junction in order to avoid favorising any line.
     */



    "START_WES": {
        "U6_WES": 0,
        "U3_WES": 0
    },
    "STOP_WES": {},
    "START_LFG": {
        "U6_LFG": 0,
        "U4_LFG": 0
    },
    "STOP_LFG": {},
    "START_VOL": {
        "U3_VOL": 0,
        "U2_VOL": 0
    },
    "STOP_VOL": {},
    "START_SPI": {
        "U4_SPI": 0,
        "U6_SPI": 0
    },
    "STOP_SPI": {},
    "START_STR": {
        "U2_STR": 0,
        "U4_STR": 0
    },
    "STOP_STR": {},
    "START_KAR": {
        "U1_KAR": 0,
        "U2_KAR": 0,
        "U4_KAR": 0
    },
    "STOP_KAR": {},
    "START_STE": {
        "U1_STE": 0,
        "U3_STE": 0,
    },
    "STOP_STE": {},
    "START_SWE": {
        "U1_SWE": 0,
        "U4_SWE": 0,
    },
    "STOP_SWE": {},
    "START_LAN": {
        "U3_LAN": 0,
        "U4_LAN": 0,
    },
    "STOP_LAN": {},
    "START_PRA": {
        "U1_PRA": 0,
        "U2_PRA": 0,
    },
    "STOP_PRA": {},










};

module.exports = map;
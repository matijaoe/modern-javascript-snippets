export const intl = {
  meta: {
    title: "Intl",
    description: "Internationalization API",
  },
  snippets: {
    inf: {
      name: "Intl.NumberFormat",
      body:
        "new Intl.NumberFormat('${1|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}'$3).format($2);",
    },
    infs: {
      name: "Intl.NumberFormat style",
      body: [
        "new Intl.NumberFormat('${1|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}', {",
        "\tstyle: '${3|decimal,currency,percent,unit|}',$4",
        "}).format($2);",
      ],
    },
    infc: {
      name: "Intl.NumberFormat as currency",
      body: [
        "new Intl.NumberFormat('${1|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}', {",
        "\tstyle: 'currency',",
        "\tcurrency: '${3|USD,EUR,GBP,AUD,CAD,JPY|}',$4",
        "}).format($2);",
      ],
    },
    infp: {
      name: "Intl.NumberFormat as percentage",
      body: [
        "new Intl.NumberFormat('${1|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}', {",
        "\tstyle: 'percent',$3",
        "}).format($2);",
      ],
    },
    infu: {
      name: "Intl.NumberFormat as unit",
      body: [
        "new Intl.NumberFormat('${1|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}', {",
        "\tstyle: 'unit',",
        "\tunit: '${3|acceleration-g-force,acceleration-meter-per-square-second,angle-arc-minute,angle-arc-second,angle-degree,angle-radian,angle-revolution,area-acre,area-hectare,area-square-centimeter,area-square-foot,area-square-inch,area-square-kilometer,area-square-meter,area-square-mile,area-square-yard,area-dunam,concentr-karat,concentr-milligram-ofglucose-per-deciliter,concentr-millimole-per-liter,concentr-percent,concentr-permille,concentr-permyriad,concentr-permillion,concentr-mole,concentr-item,concentr-portion,concentr-ofglucose,consumption-liter-per-100-kilometer,consumption-liter-per-kilometer,consumption-mile-per-gallon,consumption-mile-per-gallon-imperial,digital-bit,digital-byte,digital-gigabit,digital-gigabyte,digital-kilobit,digital-kilobyte,digital-megabit,digital-megabyte,digital-petabyte,digital-terabit,digital-terabyte,duration-century,duration-decade,duration-day,duration-day-person,duration-hour,duration-microsecond,duration-millisecond,duration-minute,duration-month,duration-month-person,duration-nanosecond,duration-quarter,duration-second,duration-week,duration-week-person,duration-year,duration-year-person,electric-ampere,electric-milliampere,electric-ohm,electric-volt,energy-calorie,energy-foodcalorie,energy-joule,energy-kilocalorie,energy-kilojoule,energy-kilowatt-hour,energy-electronvolt,energy-therm-us,energy-british-thermal-unit,force-pound-force,force-newton,force-kilowatt-hour-per-100-kilometer,frequency-gigahertz,frequency-hertz,frequency-kilohertz,frequency-megahertz,graphics-dot,graphics-dot-per-centimeter,graphics-dot-per-inch,graphics-em,graphics-megapixel,graphics-pixel,graphics-pixel-per-centimeter,graphics-pixel-per-inch,length-100-kilometer,length-astronomical-unit,length-centimeter,length-decimeter,length-fathom,length-foot,length-furlong,length-inch,length-kilometer,length-light-year,length-meter,length-micrometer,length-mile,length-mile-scandinavian,length-millimeter,length-nanometer,length-nautical-mile,length-parsec,length-picometer,length-point,length-yard,length-earth-radius,length-solar-radius,light-candela,light-lumen,light-lux,light-solar-luminosity,mass-carat,mass-grain,mass-gram,mass-kilogram,mass-tonne,mass-microgram,mass-milligram,mass-ounce,mass-ounce-troy,mass-pound,mass-stone,mass-ton,mass-dalton,mass-earth-mass,mass-solar-mass,power-gigawatt,power-horsepower,power-kilowatt,power-megawatt,power-milliwatt,power-watt,pressure-atmosphere,pressure-hectopascal,pressure-inch-ofhg,pressure-bar,pressure-millibar,pressure-millimeter-ofhg,pressure-pound-force-per-square-inch,pressure-pascal,pressure-kilopascal,pressure-megapascal,pressure-ofhg,speed-kilometer-per-hour,speed-knot,speed-meter-per-second,speed-mile-per-hour,temperature-celsius,temperature-fahrenheit,temperature-generic,temperature-kelvin,torque-pound-force-foot,torque-newton-meter,volume-acre-foot,volume-bushel,volume-centiliter,volume-cubic-centimeter,volume-cubic-foot,volume-cubic-inch,volume-cubic-kilometer,volume-cubic-meter,volume-cubic-mile,volume-cubic-yard,volume-cup,volume-cup-metric,volume-deciliter,volume-dessert-spoon,volume-dessert-spoon-imperial,volume-drop,volume-dram,volume-jigger,volume-pinch,volume-quart-imperial,volume-fluid-ounce,volume-fluid-ounce-imperial,volume-gallon,volume-gallon-imperial,volume-hectoliter,volume-liter,volume-megaliter,volume-milliliter,volume-pint,volume-pint-metric,volume-quart,volume-tablespoon,volume-teaspoon,volume-barrel|}',",
        "\tunitDisplay: '${4|long,short,narrow|}',$0",
        "}).format($2);",
      ],
    },
    idtf: {
      name: "Intl.DateTimeFormat",
      body:
        "new Intl.DateTimeFormat('${1|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}'$3).format($2);",
    },
    idtfs: {
      name: "Intl.DateTimeFormat with style",
      body: [
        "new Intl.DateTimeFormat ('${1|en-US,en-GB,en-CA,de-DE,fr-FR,es-ES,zh-CN,ru-RU,ja-JP|}', {",
        "\tdateStyle: '$3',$0",
        "}).format($2);",
      ],
    },
  },
};

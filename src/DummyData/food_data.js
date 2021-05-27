const foodData = [
  {
    name: "Kinder",
    availableAt: "South Carolina",
  },
  {
    name: "Doritos",
    availableAt: "West Virginia",
  },
  {
    name: "LEonidas",
    availableAt: "Colorado",
  },
  {
    name: "KFC",
    availableAt: "Texas",
  },
  {
    name: "Domino",
    availableAt: "Oregon",
  },
  {
    name: "Domino",
    availableAt: "Missouri",
  },
  {
    name: "Wendy's",
    availableAt: "Oklahoma",
  },
  {
    name: "Magnum",
    availableAt: "Texas",
  },
  {
    name: "Nesquik",
    availableAt: "Utah",
  },
  {
    name: "Baskin robbins",
    availableAt: "Maryland",
  },
  {
    name: "Kits",
    availableAt: "New York",
  },
  {
    name: "Soprole",
    availableAt: "Kansas",
  },
  {
    name: "Soprole",
    availableAt: "Montana",
  },
  {
    name: "Baskin robbins",
    availableAt: "New York",
  },
  {
    name: "Wonder Bread",
    availableAt: "Texas",
  },
  {
    name: "Bewley's",
    availableAt: "Vermont",
  },
  {
    name: "KFC",
    availableAt: "Mississippi",
  },
  {
    name: "Bel Group",
    availableAt: "New Jersey",
  },
  {
    name: "Carib Brewery",
    availableAt: "Wisconsin",
  },
  {
    name: "Heinz",
    availableAt: "Alabama",
  },
  {
    name: "Bel Group",
    availableAt: "Michigan",
  },
  {
    name: "Bewley's",
    availableAt: "Wisconsin",
  },
  {
    name: "Carib Brewery",
    availableAt: "Texas",
  },
  {
    name: "Nabisco",
    availableAt: "Georgia",
  },
  {
    name: "Magnum",
    availableAt: "Iowa",
  },
  {
    name: "Dr. Oetker",
    availableAt: "Massachussets",
  },
  {
    name: "Papadopoulos",
    availableAt: "Vermont",
  },
  {
    name: "Knorr",
    availableAt: "Michigan",
  },
  {
    name: "Applebee's",
    availableAt: "New York",
  },
  {
    name: "Starbucks",
    availableAt: "North Carolina",
  },
  {
    name: "Papadopoulos",
    availableAt: "Indiana",
  },
  {
    name: "Lavazza",
    availableAt: "South Carolina",
  },
  {
    name: "Secret Recipe",
    availableAt: "Connecticut",
  },
  {
    name: "Olymel",
    availableAt: "Utah",
  },
  {
    name: "Sun-Pat",
    availableAt: "Missouri",
  },
  {
    name: "Dunkin' Donuts",
    availableAt: "West Virginia",
  },
  {
    name: "Wonder Bread",
    availableAt: "Virginia",
  },
  {
    name: "McDonald's",
    availableAt: "Wisconsin",
  },
  {
    name: "Bewley's",
    availableAt: "Utah",
  },
  {
    name: "Nesquik",
    availableAt: "Massachussets",
  },
  {
    name: "Lavazza",
    availableAt: "Montana",
  },
  {
    name: "Andy Capp's fries",
    availableAt: "Missouri",
  },
  {
    name: "M&M Food Market",
    availableAt: "Louisiana",
  },
  {
    name: "Starbucks",
    availableAt: "Wisconsin",
  },
  {
    name: "Vitta Foods",
    availableAt: "South Carolina",
  },
  {
    name: "Doritos",
    availableAt: "Montana",
  },
  {
    name: "Sun-Pat",
    availableAt: "Mississippi",
  },
  {
    name: "Lavazza",
    availableAt: "Nebraska",
  },
  {
    name: "Red Lobster",
    availableAt: "Connecticut",
  },
  {
    name: "Red Lobster",
    availableAt: "North Dakota",
  },
  {
    name: "LEonidas",
    availableAt: "Connecticut",
  },
  {
    name: "Nutella",
    availableAt: "South Carolina",
  },
  {
    name: "Dunkin' Donuts",
    availableAt: "Michigan",
  },
  {
    name: "Taco Bell",
    availableAt: "Arizona",
  },
  {
    name: "Nutella",
    availableAt: "Delaware",
  },
  {
    name: "Magnum",
    availableAt: "Maryland",
  },
  {
    name: "Wonder Bread",
    availableAt: "Hawaii",
  },
  {
    name: "Sun-Pat",
    availableAt: "Hawaii",
  },
  {
    name: "Bewley's",
    availableAt: "Washington",
  },
  {
    name: "Nesquik",
    availableAt: "Wisconsin",
  },
  {
    name: "Baskin robbins",
    availableAt: "South Dakota",
  },
  {
    name: "Bel Group",
    availableAt: "Hawaii",
  },
  {
    name: "Wonder Bread",
    availableAt: "Oregon",
  },
  {
    name: "Applebee's",
    availableAt: "Montana",
  },
  {
    name: "Starbucks",
    availableAt: "South Dakota",
  },
  {
    name: "Secret Recipe",
    availableAt: "South Carolina",
  },
  {
    name: "Wendy's",
    availableAt: "Connecticut",
  },
  {
    name: "Pizza Hut",
    availableAt: "Delaware",
  },
  {
    name: "Doritos",
    availableAt: "Ohio",
  },
  {
    name: "Cheetos",
    availableAt: "Oregon",
  },
  {
    name: "Bel Group",
    availableAt: "West Virginia",
  },
  {
    name: "M&M Food Market",
    availableAt: "Tennessee",
  },
  {
    name: "Starbucks",
    availableAt: "Hawaii",
  },
  {
    name: "Red Lobster",
    availableAt: "South Dakota",
  },
  {
    name: "Red Lobster",
    availableAt: "Indiana",
  },
  {
    name: "Carib Brewery",
    availableAt: "Massachussets",
  },
  {
    name: "Nutella",
    availableAt: "New Jersey",
  },
  {
    name: "KFC",
    availableAt: "Nevada",
  },
  {
    name: "Betty Crocker",
    availableAt: "Ohio",
  },
  {
    name: "Subway",
    availableAt: "Montana",
  },
  {
    name: "Taco Bell",
    availableAt: "Massachussets",
  },
  {
    name: "Pizza Hut",
    availableAt: "Virginia",
  },
  {
    name: "Wendy's",
    availableAt: "Arkansas",
  },
  {
    name: "Betty Crocker",
    availableAt: "Pennsylvania",
  },
  {
    name: "Taco Bell",
    availableAt: "Iowa",
  },
  {
    name: "Nabisco",
    availableAt: "Louisiana",
  },
  {
    name: "Betty Crocker",
    availableAt: "Oregon",
  },
  {
    name: "Bel Group",
    availableAt: "Georgia",
  },
  {
    name: "Kits",
    availableAt: "West Virginia",
  },
  {
    name: "Kinder",
    availableAt: "New York",
  },
  {
    name: "Knorr",
    availableAt: "Maine",
  },
  {
    name: "Wonder Bread",
    availableAt: "Florida",
  },
  {
    name: "M&M Food Market",
    availableAt: "Pennsylvania",
  },
  {
    name: "Heinz",
    availableAt: "Delaware",
  },
  {
    name: "Nesquik",
    availableAt: "New York",
  },
  {
    name: "Taco Bell",
    availableAt: "South Carolina",
  },
  {
    name: "Andy Capp's fries",
    availableAt: "Oklahoma",
  },
  {
    name: "McDonald's",
    availableAt: "Maine",
  },
  {
    name: "Bel Group",
    availableAt: "New Hampshire",
  },
  {
    name: "Sun-Pat",
    availableAt: "Louisiana",
  },
  {
    name: "Dr. Oetker",
    availableAt: "Alaska",
  },
  {
    name: "Baskin robbins",
    availableAt: "Nevada",
  },
  {
    name: "Olymel",
    availableAt: "Iowa",
  },
  {
    name: "Red Lobster",
    availableAt: "Alabama",
  },
  {
    name: "Burger King",
    availableAt: "Vermont",
  },
  {
    name: "Knorr",
    availableAt: "Wyoming",
  },
  {
    name: "KFC",
    availableAt: "Mississippi",
  },
  {
    name: "Bewley's",
    availableAt: "Washington",
  },
  {
    name: "Taco Bell",
    availableAt: "Oklahoma",
  },
  {
    name: "Dunkin' Donuts",
    availableAt: "Colorado",
  },
  {
    name: "Secret Recipe",
    availableAt: "Indiana",
  },
  {
    name: "Bel Group",
    availableAt: "North Dakota",
  },
  {
    name: "Bewley's",
    availableAt: "Georgia",
  },
  {
    name: "Nesquik",
    availableAt: "Alabama",
  },
  {
    name: "Taco Bell",
    availableAt: "Ohio",
  },
  {
    name: "Subway",
    availableAt: "New Jersey",
  },
  {
    name: "Wendy's",
    availableAt: "Washington",
  },
  {
    name: "Secret Recipe",
    availableAt: "North Carolina",
  },
  {
    name: "Olymel",
    availableAt: "New York",
  },
  {
    name: "Subway",
    availableAt: "Iowa",
  },
  {
    name: "Dr. Oetker",
    availableAt: "Hawaii",
  },
  {
    name: "Nutella",
    availableAt: "South Carolina",
  },
  {
    name: "Dunkin' Donuts",
    availableAt: "Illinois",
  },
  {
    name: "Betty Crocker",
    availableAt: "Alabama",
  },
  {
    name: "Dr. Oetker",
    availableAt: "Arizona",
  },
  {
    name: "Bewley's",
    availableAt: "Pennsylvania",
  },
  {
    name: "Soprole",
    availableAt: "Massachussets",
  },
  {
    name: "McDonald's",
    availableAt: "Kentucky",
  },
  {
    name: "M&M Food Market",
    availableAt: "North Dakota",
  },
  {
    name: "Olymel",
    availableAt: "Colorado",
  },
  {
    name: "Olymel",
    availableAt: "Delaware",
  },
  {
    name: "Cobblestone",
    availableAt: "New Mexico",
  },
  {
    name: "Baskin robbins",
    availableAt: "California",
  },
  {
    name: "Dr. Oetker",
    availableAt: "South Carolina",
  },
  {
    name: "McDonald's",
    availableAt: "Kentucky",
  },
  {
    name: "Kits",
    availableAt: "North Dakota",
  },
  {
    name: "Sun-Pat",
    availableAt: "Pennsylvania",
  },
  {
    name: "McDonald's",
    availableAt: "New Hampshire",
  },
  {
    name: "Papadopoulos",
    availableAt: "Michigan",
  },
  {
    name: "Burger King",
    availableAt: "Pennsylvania",
  },
  {
    name: "Betty Crocker",
    availableAt: "Washington",
  },
  {
    name: "Soprole",
    availableAt: "Arizona",
  },
  {
    name: "Red Lobster",
    availableAt: "Nevada",
  },
  {
    name: "Applebee's",
    availableAt: "Oregon",
  },
  {
    name: "Bewley's",
    availableAt: "Montana",
  },
  {
    name: "Wonder Bread",
    availableAt: "Minnesota",
  },
  {
    name: "Secret Recipe",
    availableAt: "Tennessee",
  },
  {
    name: "Nesquik",
    availableAt: "Nebraska",
  },
  {
    name: "M&M Food Market",
    availableAt: "New Mexico",
  },
  {
    name: "LEonidas",
    availableAt: "Wisconsin",
  },
  {
    name: "Nabisco",
    availableAt: "North Dakota",
  },
  {
    name: "Pizza Hut",
    availableAt: "Indiana",
  },
  {
    name: "Red Lobster",
    availableAt: "New Jersey",
  },
  {
    name: "Bewley's",
    availableAt: "New Hampshire",
  },
  {
    name: "Domino",
    availableAt: "Minnesota",
  },
  {
    name: "Red Lobster",
    availableAt: "Oregon",
  },
  {
    name: "Dunkin' Donuts",
    availableAt: "Nebraska",
  },
  {
    name: "Starbucks",
    availableAt: "Massachussets",
  },
  {
    name: "Sun-Pat",
    availableAt: "Oregon",
  },
  {
    name: "Bel Group",
    availableAt: "Utah",
  },
  {
    name: "Dr. Oetker",
    availableAt: "Missouri",
  },
  {
    name: "Vitta Foods",
    availableAt: "Nevada",
  },
  {
    name: "Cobblestone",
    availableAt: "Hawaii",
  },
  {
    name: "Bewley's",
    availableAt: "North Carolina",
  },
  {
    name: "Nabisco",
    availableAt: "South Dakota",
  },
  {
    name: "Heinz",
    availableAt: "North Dakota",
  },
  {
    name: "Applebee's",
    availableAt: "Nevada",
  },
  {
    name: "Nesquik",
    availableAt: "New Jersey",
  },
  {
    name: "Tic Tac",
    availableAt: "Iowa",
  },
  {
    name: "Kits",
    availableAt: "Wisconsin",
  },
  {
    name: "Olymel",
    availableAt: "Tennessee",
  },
  {
    name: "LEonidas",
    availableAt: "West Virginia",
  },
  {
    name: "Pizza Hut",
    availableAt: "Pennsylvania",
  },
  {
    name: "Cheetos",
    availableAt: "New York",
  },
  {
    name: "Bewley's",
    availableAt: "Wyoming",
  },
  {
    name: "Red Lobster",
    availableAt: "Georgia",
  },
  {
    name: "Red Lobster",
    availableAt: "Pennsylvania",
  },
  {
    name: "Lavazza",
    availableAt: "Missouri",
  },
  {
    name: "Nesquik",
    availableAt: "New Mexico",
  },
  {
    name: "Carib Brewery",
    availableAt: "Arizona",
  },
  {
    name: "KFC",
    availableAt: "Texas",
  },
  {
    name: "Nesquik",
    availableAt: "Louisiana",
  },
  {
    name: "Cobblestone",
    availableAt: "Minnesota",
  },
  {
    name: "Kits",
    availableAt: "South Carolina",
  },
  {
    name: "Soprole",
    availableAt: "Utah",
  },
  {
    name: "Carib Brewery",
    availableAt: "Delaware",
  },
  {
    name: "Applebee's",
    availableAt: "Kentucky",
  },
  {
    name: "Kinder",
    availableAt: "Georgia",
  },
  {
    name: "Papadopoulos",
    availableAt: "Pennsylvania",
  },
  {
    name: "Taco Bell",
    availableAt: "North Carolina",
  },
  {
    name: "Domino",
    availableAt: "Arizona",
  },
  {
    name: "Bel Group",
    availableAt: "North Dakota",
  },
  {
    name: "Domino",
    availableAt: "Virginia",
  },
  {
    name: "Tic Tac",
    availableAt: "Tennessee",
  },
  {
    name: "LEonidas",
    availableAt: "Rhode Island",
  },
  {
    name: "LEonidas",
    availableAt: "Vermont",
  },
  {
    name: "Olymel",
    availableAt: "Louisiana",
  },
  {
    name: "LEonidas",
    availableAt: "Vermont",
  },
  {
    name: "McDonald's",
    availableAt: "Louisiana",
  },
  {
    name: "Subway",
    availableAt: "Virginia",
  },
];

module.exports = foodData;

// app/api/avengers/route.js
export async function GET(request) {
  const users = [
    {
      id: 1,
      city: 'Blankenberge',
      temperature: '7º',
      feelsLike: '5º',
      min: '10º',
      max: '25º',
      forecast: [
        {
          label: "Mon",
          icon: "sun",
          min: "5º",
          max: "10º"
        },
        {
          label: "Tue",
          icon: "cloud",
          min: "6º",
          max: "9º"
        },
        {
          label: "Wed",
          icon: "cloud",
          min: "8º",
          max: "11º"
        },
        {
          label: "Thu",
          icon: "sun",
          min: "9º",
          max: "14º"
        },
        {
          label: "Fri",
          icon: "rain",
          min: "4º",
          max: "7º"
        }
        {
          label: "Sat",
          icon: "sun",
          min: "14º",
          max: "17º"
        },
        {
          label: "Sun",
          icon: "sun",
          min: "16º",
          max: "23º"
        }
      ]
    },
    {
      id: 2,
      city: 'Brugge',
      temperature: '-2º',
      feelsLike: '-3º',
      min: '2º',
      max: '-4º',
      forecast: [
        {
          label: "Mon",
          icon: "sun",
          min: "5º",
          max: "10º"
        },
        {
          label: "Tue",
          icon: "cloud",
          min: "6º",
          max: "9º"
        },
        {
          label: "Wed",
          icon: "cloud",
          min: "8º",
          max: "11º"
        },
        {
          label: "Thu",
          icon: "sun",
          min: "9º",
          max: "14º"
        },
        {
          label: "Fri",
          icon: "rain",
          min: "4º",
          max: "7º"
        }
        {
          label: "Sat",
          icon: "sun",
          min: "14º",
          max: "17º"
        },
        {
          label: "Sun",
          icon: "sun",
          min: "16º",
          max: "23º"
        }
      ]
    },
    {
      id: 3,
      city: 'Knokke',
      temperature: '24º',
      feelsLike: '32º',
      min: '20º',
      max: '25º',
      forecast: [
        {
          label: "Mon",
          icon: "sun",
          min: "5º",
          max: "10º"
        },
        {
          label: "Tue",
          icon: "cloud",
          min: "6º",
          max: "9º"
        },
        {
          label: "Wed",
          icon: "cloud",
          min: "8º",
          max: "11º"
        },
        {
          label: "Thu",
          icon: "sun",
          min: "9º",
          max: "14º"
        },
        {
          label: "Fri",
          icon: "rain",
          min: "4º",
          max: "7º"
        }
        {
          label: "Sat",
          icon: "sun",
          min: "14º",
          max: "17º"
        },
        {
          label: "Sun",
          icon: "sun",
          min: "16º",
          max: "23º"
        }
      ]
    },
    {
      id: 4,
      city: 'Nieuwpoort',
      temperature: '10º',
      feelsLike: '6º',
      min: '10º',
      max: '15º',
      forecast: [
        {
          label: "Mon",
          icon: "sun",
          min: "5º",
          max: "10º"
        },
        {
          label: "Tue",
          icon: "cloud",
          min: "6º",
          max: "9º"
        },
        {
          label: "Wed",
          icon: "cloud",
          min: "8º",
          max: "11º"
        },
        {
          label: "Thu",
          icon: "sun",
          min: "9º",
          max: "14º"
        },
        {
          label: "Fri",
          icon: "rain",
          min: "4º",
          max: "7º"
        }
        {
          label: "Sat",
          icon: "sun",
          min: "14º",
          max: "17º"
        },
        {
          label: "Sun",
          icon: "sun",
          min: "16º",
          max: "23º"
        }
      ]
    },
  ];
  return Response.json(users);
}

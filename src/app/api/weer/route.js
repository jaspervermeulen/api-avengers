// app/api/avengers/route.js
export async function GET(request) {
  const users = [
    {
      id: 1,
      city: 'Blankenberge',
      temperature: '7º',
      feelsLike: '5º',
      min: '10º',
      max: '5º',
    },
    {
      id: 2,
      city: 'Brugge',
      temperature: '-2º',
      feelsLike: '-3º',
      min: '2º',
      max: '-4º',
    },
    {
      id: 3,
      city: 'Knokke',
      temperature: '24º',
      feelsLike: '32º',
      min: '20º',
      max: '25º',
    },
  ];
  return Response.json(users);
}

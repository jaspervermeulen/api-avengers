// app/api/avengers/route.js
export async function GET(request) {
  const users = [
    {
      name: 'Stephanie Allen',
      birthday: '17/09/1981',
      address: '958 Ferguson Bridge South William, LA 70331',
      partner: 'Holly Johnson',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Monica Morrow',
      birthday: '11/02/1992',
      address: 'Unit 2971 Box 3140 DPO AE 78134',
      partner: 'Travis Carlson',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Crystal Munoz',
      birthday: '29/08/1959',
      address: '8851 Browning Bridge Suite 903 Mortonview, SD 54991',
      partner: 'Alison Perry',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Jacqueline Perez',
      birthday: '11/03/1989',
      address: '596 Benjamin Prairie Johnsonbury, DE 49941',
      partner: 'Brittany Smith',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Megan Craig',
      birthday: '23/06/1989',
      address: '89475 Patel Underpass New Michaelmouth, WY 10631',
      partner: 'Doris Diaz',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Jason Barber',
      birthday: '16/02/1950',
      address: '13227 Browning Mission Apt. 030 Lake Chad, TN 67202',
      partner: 'Karen Medina',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Amy Norris',
      birthday: '30/04/1979',
      address: '8511 Benson Summit Apt. 746 Nathanfort, TX 24650',
      partner: 'Justin Mcdaniel',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Taylor Payne',
      birthday: '05/04/1996',
      address: '166 Medina Lakes Jacquelinebury, AR 42797',
      partner: 'Timothy Medina',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Devin Jackson',
      birthday: '08/10/2005',
      address: '8658 Anthony Alley Suite 413 West Katherine, KY 00717',
      partner: 'Ann Blevins',
      image: 'https://i.pravatar.cc/300',
    },
    {
      name: 'Michelle Scott',
      birthday: '09/11/2006',
      address: '040 Carol Court Port Thomas, VT 35757',
      partner: 'Amanda Coleman',
      image: 'https://i.pravatar.cc/300',
    },
  ];
  return Response.json(users);
}

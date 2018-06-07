
//TODO: Remove this to its own seperate json file for testing
const testBill = {
  title: 'The bill Title',
  bill_number: 12345,
  status: 2,
  status_update: '5-09-2018',
  sponsors: [{
      'name': 'Sean Kelly',
      'party': 'D',
      'district': 'HD093',
      'url': 'https://www.google.com'
    },
    {
      'name': 'George Washginton',
      'pic_id': '01234',
      'party': 'D',
      'district': 'HD093',
      'url': 'https://www.google.com'
    },
    name: 'Abraham Lincoln',
    party: 'R',
    district: 'HD093',
    url: 'https://www.google.com'
  ],
  votes: [
    {
      "roll_call_id": 751588,
      "date": "2018-05-09",
      "desc": "Senate: Consideration of Resolutions Resolution",
      "yea": 35,
      "nay": 0,
      "nv": 0,
      "absent": 0,
      "total": 35,
      "passed": 1,
      "chamber": "S",
      "chamber_id": 22,
      "url": "https://legiscan.com/CO/rollcall/HJR1022/id/751588",
      "state_link": "http://leg.colorado.gov/content/hjr18-1022vote19d54a"
    },
    {
      "roll_call_id": 751589,
      "date": "2018-05-09",
      "desc": "House: Third Reading Res",
      "yea": 64,
      "nay": 0,
      "nv": 0,
      "absent": 1,
      "total": 65,
      "passed": 1,
      "chamber": "H",
      "chamber_id": 21,
      "url": "https://legiscan.com/CO/rollcall/HJR1022/id/751589",
      "state_link": "http://leg.colorado.gov/content/hjr18-1022vote189402"
    }
  ],
  text_link: 'https://www.google.com'
}

function setup(){

}
describe('<Bill />', ()=>{
  it('should render a div with the class name \'bill\'',()=>{

    //TODO: (sean) write a test that checks if comoponent
    // is a div with the class name of bill

  });

  it('should dispay the heading for the bill', ()=>{
    // TODO: (sean) write a test to check bill title
  });

  it('should display the progress of the bill', () => {
    // TODO: (sean) writes a test that check for sponsor component
  });

  it('should display the votes component', () =>{
    // TODO: (sean) writes a test that checks for votes component
  });
});
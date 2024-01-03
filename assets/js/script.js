//Stores Time Block Elements
var blocksEl ={
  block: [],
  time: [],
  text: [],
  button: [],
  iEl: []
};

$(function () {
  //Current Day Element
  var currentDay = $('#currentDay');

  //Main Div
  var mainEl = $('#main');

  for (var i=0; i<9; i++){
    //Time Block Div
    blocksEl.block[i] = $('<div>');
    blocksEl.block[i].addClass('row time-block');
    //Time Display Div
    blocksEl.time[i] = $('<div>');
    blocksEl.time[i].addClass('col-2 col-md-1 hour text-center py-3');
    //Text Area
    blocksEl.text[i] = $('<textarea>');
    blocksEl.text[i].addClass('col-8 col-md-10 description');
    blocksEl.text[i].attr("rows","3");
    //Save Button 
    blocksEl.button[i] = $('<button>');
    blocksEl.button[i].addClass('btn saveBtn col-3 col-md-1');
    blocksEl.button[i].attr("aria-label","save");
    blocksEl.iEl[i] = $('<i>');
    blocksEl.iEl[i].addClass('fas fa-save');
    blocksEl.iEl[i].attr('aria-hidden','true');

    //Set Text & Attributes
    switch(i){
      case 0:
        blocksEl.time[i].text('9 AM');
        blocksEl.text[i].attr('id','hour-9');
        blocksEl.button[i].attr('id','button-9');
        break;
      case 1:
        blocksEl.time[i].text('10 AM');
        blocksEl.text[i].attr('id','hour-10');
        blocksEl.button[i].attr('id','button-10');
        break;
      case 2:
        blocksEl.time[i].text('11 AM');
        blocksEl.text[i].attr('id','hour-11');
        blocksEl.button[i].attr('id','button-11');
        break;
      case 3:
        blocksEl.time[i].text('12 PM');
        blocksEl.text[i].attr('id','hour-12');
        blocksEl.button[i].attr('id','button-12');
        break;
      case 4:
        blocksEl.time[i].text('1 PM');
        blocksEl.text[i].attr('id','hour-13');
        blocksEl.button[i].attr('id','button-13');
        break;
      case 5:
        blocksEl.time[i].text('2 PM');
        blocksEl.text[i].attr('id','hour-14');
        blocksEl.button[i].attr('id','button-14');
        break;
      case 6:
        blocksEl.time[i].text('3 PM');
        blocksEl.text[i].attr('id','hour-15');
        blocksEl.button[i].attr('id','button-15');
        break;
      case 7:
        blocksEl.time[i].text('4 PM');
        blocksEl.text[i].attr('id','hour-16');
        blocksEl.button[i].attr('id','button-16');
        break;
      case 8:
        blocksEl.time[i].text('5 PM');
        blocksEl.text[i].attr('id','hour-17');
        blocksEl.button[i].attr('id','button-16');
      default:
        break;
    }
  
    //Append Elements
    blocksEl.button[i].append(blocksEl.iEl[i]);
    blocksEl.block[i].append(blocksEl.time[i]);
    blocksEl.block[i].append(blocksEl.text[i]);
    blocksEl.block[i].append(blocksEl.button[i]);
    mainEl.append(blocksEl.block[i]);
  }

  //Save User Input to Local Storage
  $('#button-9').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-9',JSON.stringify($('#hour-9').val()));
  });
  $('#button-10').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-10',JSON.stringify($('#hour-10').val()));
  });
  $('#button-11').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-11',JSON.stringify($('#hour-11').val()));
  });
  $('#button-12').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-13',JSON.stringify($('#hour-13').val()));
  });
  $('#button-13').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-13',JSON.stringify($('#hour-13').val()));
  });
  $('#button-14').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-14',JSON.stringify($('#hour-14').val()));
  });
  $('#button-15').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-15',JSON.stringify($('#hour-15').val()));
  });
  $('#button-16').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-16',JSON.stringify($('#hour-16').val()));
  });
  $('#button-17').on('click',function(event){
    event.preventDefault();
    localStorage.setItem('hour-17',JSON.stringify($('#hour-17').val()));
  });

  //Current Hour
  var time=dayjs().format('H');
  var timeIndex=time-9;

  //Past, Present, & Future Class Setting
  for(var i=0; i<9; i++){
    if (i<timeIndex){
      blocksEl.text[i].addClass('past');
    } else if (i>timeIndex){
      blocksEl.text[i].addClass('future');
    } else {
      blocksEl.text[i].addClass('present');
    }
  }

  //Get Data from Local Storage and Displays on Text Area
  $('#hour-9').text(JSON.parse(localStorage.getItem('hour-9')));
  $('#hour-10').text(JSON.parse(localStorage.getItem('hour-10')));
  $('#hour-11').text(JSON.parse(localStorage.getItem('hour-11')));
  $('#hour-12').text(JSON.parse(localStorage.getItem('hour-12')));
  $('#hour-13').text(JSON.parse(localStorage.getItem('hour-13')));
  $('#hour-14').text(JSON.parse(localStorage.getItem('hour-14')));
  $('#hour-15').text(JSON.parse(localStorage.getItem('hour-15')));
  $('#hour-16').text(JSON.parse(localStorage.getItem('hour-16')));
  $('#hour-17').text(JSON.parse(localStorage.getItem('hour-17')));

  //Displays Current Date on Header
  currentDay.text(dayjs().format('dddd, MMMM D, YYYY'));
});
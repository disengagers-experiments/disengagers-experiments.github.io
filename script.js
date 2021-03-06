// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "window",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "window",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter class=\"instruction\"\u003E\u003Ch3\u003EЗдравствуйте!\u003C\u002Fh3\u003E \u003Cbr\u003E \u003Cbr\u003EСпасибо, что согласились поучаствовать в этом исследовании.  \u003Cbr\u003E\r\nИсследование будет длиться примерно 20 минут. \u003C\u002Fcenter\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Дальше →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
// 1 - классификация фигур
// 2 - классификация объектов по словам
window.group = getParameterByName('group') - 0;
// 1 - первая секвенция
// 2 - вторая секвенция
window.seq = getParameterByName('seq') - 1;

window.targets = {};
let targets = window.targets;
targets.stimuls = {'l': '«', 'r': '»'};

// функция для того, чтобы получить из ссылки значение параметры
// ссылка?параметр=значение
// функция получит значение
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function read_text_file(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


function get_json(json_url, func) {
  read_text_file(json_url, func);
}


//генерация рандомного массива
//var j = [];
//for(var i = 1; i <= 120; i++) {
// j.push([Math.random() < 0.5, Math.random() < 0.5])
//}

//проверка того, что условия равномерно распределены
//var v10 = 0, v11 = 0, v01 = 0, v00 = 0;
//for(var i in j) {
//  if(j[i][0] == true && j[i][1] == false) v10++; 
//  if(j[i][0] == true && j[i][1] == true) v11++; 
//  if(j[i][0] == false && j[i][1] == false) v01++; 
//  if(j[i][0] == false && j[i][1] == false) v00++; 
//}


// последовательность - первое это конгруетный/неконгруетный прайминг (true/false), второе время между праймингом и целью 117/183 мс (true/false)
targets.sequence = [[true, true], [true, true]];
targets.sequence[0] = [[true, true], [true, true],[true, true],[false, true],[true, true],[true, true],[false, true],[true, true],[false, true],[true, true],[true, true],[true, true],[false, true],[true, true],[false, true],[false, true],[true, true],[true, true],[false, true],[false, true],[true, true],[false, true],[true, true],[true, true],[false, true],[false, true],[true, true],[false, true],[false, true],[true, true],[false, true],[false, true],[false, true],[true, true],[true, true],[true, true],[false, true],[false, true],[true, true],[true, true],[true, true],[false, true],[true, true],[true, true],[true, true],[true, true],[false, true],[false, true],[true, true],[true, true],[false, true],[false, true],[true, true],[false, true],[false, true],[false, true],[false, true],[true, true],[false, true],[false, true],[true, true],[false, false],[true, false],[true, false],[false, false], [true, false],[false, false],[false, false],[true, false],[true, false],[false, false],[true, false],[false, false],[false, false],[false, false],[true, false],[false, false],[false, false],[true, false],[false, false],[false, false],[false, false],[true, false],[false, false],[false, false],[false, false],[true, false],[true, false],[true, false],[true, false],[false, false],[false, false],[true, false],[false, false],[false, false],[true, false],[false, false],[false, false],[true, false],[true, false],[true, false],[true, false],[false, false],[true, false],[true, false],[false, false],[true, false],[true, false],[false, false],[true, false],[false, false],[true, false],[false, false],[false, false],[false, false],[false, false],[true, false],[true, false],[true, false],[false, false],[true, false]];

targets.sequence[1] = [[true, false], [true, false],[true, false],[false, false],[true, false],[true, false],[false, false],[true, false],[false, false],[true, false],[true, false],[true, false],[false, false],[true, false],[false, false],[false, false],[true, false],[true, false],[false, false],[false, false],[true, false],[false, false],[true, false],[true, false],[false, false],[false, false],[true, false],[false, false],[false, false],[true, false],[false, false],[false, false],[false, false],[true, false],[true, false],[true, false],[false, false],[false, false],[true, false],[true, false],[true, false],[false, false],[true, false],[true, false],[true, false],[true, false],[false, false],[false, false],[true, false],[true, false],[false, false],[false, false],[true, false],[false, false],[false, false],[false, false],[false, false],[true, false],[false, false],[false, false],[true, false],[false, true],[true, true],[true, true],[false, true], [true, true],[false, true],[false, true],[true, true],[true, true],[false, true],[true, true],[false, true],[false, true],[false, true],[true, true],[false, true],[false, true],[true, true],[false, true],[false, true],[false, true],[true, true],[false, true],[false, true],[false, true],[true, true],[true, true],[true, true],[true, true],[false, true],[false, true],[true, true],[false, true],[false, true],[true, true],[false, true],[false, true],[true, true],[true, true],[true, true],[true, true],[false, true],[true, true],[true, true],[false, true],[true, true],[true, true],[false, true],[true, true],[false, true],[true, true],[false, true],[false, true],[false, true],[false, true],[true, true],[true, true],[true, true],[false, true],[true, true]];

targets.list = [];
let sequence = targets.sequence[window.seq];
console.log(sequence);
for(var i in sequence) {
  let t = {'time': '', 'priming_stimul': '', 'target_stimul': '', 
           'priming_value': -1, 'target_value': -1};
  let arrow = Math.random() < 0.5 ? targets.stimuls['l'] : targets.stimuls['r'];
  if(sequence[i][0]) {
    t.priming_stimul = arrow;
    t.target_stimul = arrow;
    t.priming_value = (arrow == targets.stimuls['r']) - 0;
    t.target_value = t.priming_value;
  }
  else {
    t.priming_stimul = arrow;
    t.target_stimul = arrow == targets.stimuls['l'] ? targets.stimuls['r'] : targets.stimuls['l'];
    t.priming_value = (arrow == targets.stimuls['r']) - 0;
    t.target_value = !(arrow == targets.stimuls['r']) - 0;
  }

  t.time = sequence[i][1] ? 17 : 83;
  //117 / 183 мс между праймингом и целевой задачей

  //тест, что всё сработало как надо
  //t.test = sequence[i];

  targets.list.push(t);
}




// объявление объектов
window.fillers = {};
fillers = window.fillers;
fillers.shapes = {"list": []};
fillers.words = {"list": []};






//строка для генерации последовательности
//window.shapes = []
//for(var i = 1; i <= 240; i++) {
//  window.shapes.push(Math.random() < 0.5 ? 1 : 0)
//}



get_json('static/filles_sequence.json', function(text) {
  let json = JSON.parse(text)
  fillers = window.fillers;

  fillers.sequence = json.sequence;

  // варианты фигур - треугольники и круги
  // категории кючи
  fillers.shapes.types = json.shapes.types;

  // 1 - естественное, 2 - рукотворное
  // должно быть 240
  fillers.words.dict = json.words.dict; 
  // рандомная последовательность
  fillers.words.shuffle = function() {
    let shuffle = function(dict, first_elem) {
      dict.shift();
      dict = dict.sort(function(){return 0.5-Math.random();});
      dict.unshift(first_elem);
      return dict; 
    }
    window.fillers.words.dict[1] = shuffle(window.fillers.words.dict[1], window.fillers.words.dict[1][0]);
    window.fillers.words.dict[2] = shuffle(window.fillers.words.dict[2], window.fillers.words.dict[2][0]);
  } 
  fillers.words.shuffle();

  for(var i in fillers.sequence) {
    // преобразование последовательности в лист с стимулами для фигур
    fillers.shapes.list.push(
      fillers.shapes.types[ fillers.sequence[i] ]
    );

    // преобразование последовательности в лист с стимулами для слов
    fillers.words.list.push(
      //добавляет первый элемент из соответствующей категории
      fillers.words.dict[ fillers.sequence[i] ][0]
    );
    //убирает первый элемент из соответствующей категории
    fillers.words.dict[ fillers.sequence[i] ].shift() 
  }

  console.log(window.fillers.sequence);
  console.log(window.fillers.shapes.list);
  console.log(window.fillers.words.list);

});

}
      },
      "title": "start_screen (script)",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter class=\"instruction\"\u003EВ исследовании Вам предстоит решать две задачи (задачи будут поочередно сменять друг друга):\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Chr\u003E\r\n1. На экране на короткое время будет предъявляться стрелка. Необходимо определять, в каком направлении указывает стрелка. Если стрелка указывает влево («), Вам необходимо как можно быстрее нажать стрелку влево \u002F вправо на клавиатуренажать стрелку влево на клавиатуре. Если же стрелка указывает вправо (»), Вам необходимо как можно быстрее нажать стрелку вправо на клавиатуре.  \u003Cbr\u003E\u003Cbr\u003E\u003Chr\u003E\r\n2. ${ (window.group == 1) ? \"На экране будут предъявляться геометрические фигуры. Необходимо определить, является фигура треугольником или кругом. Если фигура является треугольником, необходимо будет нажать стрелку влево.  В случае, если фигура является кругом, необходимо будет нажать стрелку вправо.\" : \"На экране будут предъявлятся слова, обозначающие определённый объект или явление. Необходимо выбрать, этот объект или явление естественного или рукотворного происхождения. Если объект естественного происхождения, надо нажать стрелку влево. В случае, если объект рукотворного происхождения, надо нажать стрелку право. Рукотворным будет считаться любой объект или явление, сделанные человеком вне зависимости от того, насколько тесную связь он имеет с природой. \" }\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Chr\u003E\r\n\u003C\u002Fcenter\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Перейти к тренировке →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instuction",
      "tardy": true,
      "skip": "${ parameters.id == 1 }"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "half": 0
        },
        {
          "half": 60
        }
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "half_loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Loop",
        "templateParameters": [
          {
            "id": 1
          },
          {
            "id": 2
          },
          {
            "id": 3
          },
          {
            "id": 4
          },
          {
            "id": 5
          },
          {
            "id": 6
          },
          {
            "id": 7
          },
          {
            "id": 8
          },
          {
            "id": 9
          },
          {
            "id": 10
          },
          {
            "id": 11
          },
          {
            "id": 12
          },
          {
            "id": 13
          },
          {
            "id": 14
          },
          {
            "id": 15
          },
          {
            "id": 16
          },
          {
            "id": 17
          },
          {
            "id": 18
          },
          {
            "id": 19
          },
          {
            "id": 20
          },
          {
            "id": 21
          },
          {
            "id": 22
          },
          {
            "id": 23
          },
          {
            "id": 24
          },
          {
            "id": 25
          },
          {
            "id": 26
          },
          {
            "id": 27
          },
          {
            "id": 28
          },
          {
            "id": 29
          },
          {
            "id": 30
          },
          {
            "id": 31
          },
          {
            "id": 32
          },
          {
            "id": 33
          },
          {
            "id": 34
          },
          {
            "id": 35
          },
          {
            "id": 36
          },
          {
            "id": 37
          },
          {
            "id": 38
          },
          {
            "id": 39
          },
          {
            "id": 40
          },
          {
            "id": 41
          },
          {
            "id": 42
          },
          {
            "id": 43
          },
          {
            "id": 44
          },
          {
            "id": 45
          },
          {
            "id": 46
          },
          {
            "id": 47
          },
          {
            "id": 48
          },
          {
            "id": 49
          },
          {
            "id": 50
          },
          {
            "id": 51
          },
          {
            "id": 52
          },
          {
            "id": 53
          },
          {
            "id": 54
          },
          {
            "id": 55
          },
          {
            "id": 56
          },
          {
            "id": 57
          },
          {
            "id": 58
          },
          {
            "id": 59
          },
          {
            "id": 60
          }
        ],
        "sample": {
          "mode": "sequential"
        },
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "task",
        "shuffleGroups": [],
        "template": {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
       document.querySelector('#answer').value = "0";
    }
    else if (e.keyCode == '39') {
       // right arrow
       document.querySelector('#answer').value = "1";
    }
    else {
      return false;
    }

    document.querySelector('#hide_submit').click();

}
}
          },
          "title": "Sequence (script bind keydown)",
          "content": [
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "run": function anonymous(
) {
console.log(this);
}
              },
              "title": "task_sequence",
              "shuffle": true,
              "tardy": true,
              "content": [
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "target_samples",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cross\"\u003E\u003Cspan\u003E&#10011;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": "next"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "cross",
                      "timeout": "500"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "empty_screen",
                      "timeout": "400"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"arrow\"\u003E${ window.targets.list[(parameters.id - 1  + parameters.half)].priming_stimul }\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "prime",
                      "tardy": true,
                      "timeout": "17"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"sharp-mask\"\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "sharp_mask",
                      "timeout": "83"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "empty_screen",
                      "tardy": true,
                      "timeout": "${ window.targets.list[(parameters.id - 1) + parameters.half].time }"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"arrow\"\u003E${ window.targets.list[(parameters.id - 1 + parameters.half)].target_stimul }\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E ",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "target",
                      "timeout": "100",
                      "tardy": true
                    },
                    {
                      "type": "lab.html.Form",
                      "content": "\u003Cform\u003E\n  \u003Cinput type=\"hidden\" name=\"target_right_answer\" value=\"${ window.targets.list[parameters.id - 1 + parameters.half].target_value }\"\u003E\n  \u003Cinput type=\"hidden\" name=\"prime\" value=\"${ window.targets.list[parameters.id - 1 + parameters.half].priming_value }\"\u003E\n  \u003Cinput type=\"hidden\" name=\"target_soa\" value=\"${ window.targets.list[parameters.id - 1 + parameters.half].time }\"\u003E\n  \u003Cinput type=\"hidden\" name=\"group\" value=\"${ window.group }\"\u003E\n  \u003Cinput type=\"hidden\" name=\"seq\" value=\"${ window.seq - 0 + 1  }\"\u003E\n  \u003Cinput type=\"hidden\" id=\"answer\" name=\"answer\" value=\"none\"\u003E\n  \u003Cbutton type=\"submit\" id=\"hide_submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
                      "scrollTop": true,
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "target_answer",
                      "tardy": true,
                      "timeline": []
                    }
                  ]
                },
                {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "filler_samples_1",
                  "content": [
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cross\"\u003E\u003Cspan\u003E&#10011;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": "next"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "cross",
                      "timeout": "500"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cdiv\u003E\u003C\u002Fdiv\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "empty_screen_1",
                      "timeout": "400"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"sharp-mask\"\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "sharp_mask",
                      "timeout": "100"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Cdiv\u003E\u003C\u002Fdiv\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "empty_screen_2_0",
                      "timeout": "83"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E \r\n  ${  \r\n    (window.group == 1 ?  \r\n    \"\u003Cdiv class=\\'\" + window.fillers.shapes.list[(parameters.id + parameters.half) * 2 - 2] + \"\\'\u003E\u003C\u002Fdiv\u003E\" +\r\n    \"\u003Cdiv class='conditions'\u003E\" +\r\n      \"\u003Cdiv class='c_left'\u003Eтреугольник\u003C\u002Fdiv\u003E\" +\r\n      \"\u003Cdiv class='c_right' style='margin-left: 70px;'\u003Eкруг\u003C\u002Fdiv\u003E\" +\r\n    \"\u003C\u002Fdiv\u003E\": \r\n    \"\u003Cdiv\u003E\" + window.fillers.words.list[(parameters.id + parameters.half) * 2 - 2] + \"\u003C\u002Fdiv\u003E\" +\r\n    \"\u003Cdiv class='conditions'\u003E\" +\r\n      \"\u003Cdiv class='c_left'\u003Eестественное\u003C\u002Fdiv\u003E\" +\r\n      \"\u003Cdiv class='c_right'\u003Eрукотворное\u003C\u002Fdiv\u003E\" +\r\n    \"\u003C\u002Fdiv\u003E\") \r\n    } \r\n\u003C\u002Fcenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"hidden\" name=\"stimul\" value=\"${ window.group == 1 ? window.fillers.shapes.list[(parameters.id + parameters.half) * 2 - 2] : window.fillers.words.list[(parameters.id + parameters.half) * 2 - 2]  }\"\u003E\r\n  \u003Cinput type=\"hidden\" name=\"fillers_right_answer\" value=\"${ window.fillers.sequence[(parameters.id + parameters.half) * 2 - 2]  }\"\u003E\r\n  \u003Cinput type=\"hidden\" id=\"answer\" name=\"answer\" value=\"none\"\u003E\r\n  \u003Cbutton type=\"submit\" id=\"hide_submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n\u003C\u002Fform\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "filler_answer",
                      "tardy": true
                    }
                  ]
                }
              ]
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "filler_samples_2",
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"cross\"\u003E\u003Cspan\u003E&#10011;\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": "next"
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "cross",
                  "timeout": "500"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cdiv\u003E\u003C\u002Fdiv\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "empty_screen_1",
                  "timeout": "400"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ccenter\u003E\r\n  \u003Cdiv class=\"sharp-mask\"\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n    \u003Cdiv\u003E##########\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "sharp_mask",
                  "timeout": "100"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Cdiv\u003E\u003C\u002Fdiv\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "empty_screen_2",
                  "timeout": "83"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ccenter\u003E \r\n  ${  \r\n    (window.group == 1 ? \r\n    \"\u003Cdiv class=\\'\" + window.fillers.shapes.list[(parameters.half + parameters.id) * 2 - 1] + \"\\'\u003E\u003C\u002Fdiv\u003E\" +\r\n    \"\u003Cdiv class='conditions'\u003E\" +\r\n      \"\u003Cdiv class='c_left'\u003Eтреугольник\u003C\u002Fdiv\u003E\" +\r\n      \"\u003Cdiv class='c_right' style='margin-left: 70px;'\u003Eкруг\u003C\u002Fdiv\u003E\" +\r\n    \"\u003C\u002Fdiv\u003E\": \r\n    \"\u003Cdiv\u003E\" + window.fillers.words.list[(parameters.half + parameters.id) * 2 - 1] + \"\u003C\u002Fdiv\u003E\" +\r\n    \"\u003Cdiv class='conditions'\u003E\" +\r\n      \"\u003Cdiv class='c_left'\u003Eестественное\u003C\u002Fdiv\u003E\" +\r\n      \"\u003Cdiv class='c_right'\u003Eрукотворное\u003C\u002Fdiv\u003E\" +\r\n    \"\u003C\u002Fdiv\u003E\") \r\n    } \r\n\u003C\u002Fcenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"hidden\" name=\"stimul\" value=\"${ window.group == 1 ? window.fillers.shapes.list[(parameters.half + parameters.id) * 2 - 1] : window.fillers.words.list[(parameters.half + parameters.id) * 2 - 1]  }\"\u003E\r\n  \u003Cinput type=\"hidden\" name=\"fillers_right_answer\" value=\"${ window.fillers.sequence[(parameters.half + parameters.id) * 2 - 1]  }\"\u003E\r\n  \u003Cinput type=\"hidden\" id=\"answer\" name=\"answer\" value=\"none\"\u003E\r\n  \u003Cbutton type=\"submit\" id=\"hide_submit\"\u003ESubmit\u003C\u002Fbutton\u003E\r\n\u003C\u002Fform\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "filler_answer",
                  "tardy": true
                }
              ]
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Ccenter class=\"instruction\"\u003EТренировка завершена. Когда будете готовы, можете переходить к основной серии. \r\n\u003C\u002Fcenter\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Начать",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "end_of_trening",
              "skip": "${ parameters.id - 0 + parameters.half \u003E 1 }"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Ccenter class=\"instruction\"\u003E\u003Ch3\u003EПервая половина эксперимента пройдена!\u003C\u002Fh3\u003E\u003Cbr\u003E\r\nМожете немного отдохнуть. \u003Cbr\u003E\r\nКогда будете готовы нажмите на кнопку \"Продолжить\".\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Chr\u003E\r\n\u003C\u002Fcenter\u003E",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Продолжить →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "relax",
              "skip": "${ parameters.half + parameters.id != 61 }"
            }
          ]
        }
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Спасибо!",
          "content": "Вы успешно завершили исследование! Большое спасибо за участие."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "thanks",
      "timeout": "1000"
    }
  ]
})

// Let's go!
study.run()
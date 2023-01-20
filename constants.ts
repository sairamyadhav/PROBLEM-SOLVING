export class UrlConstants {
  public static readonly LOGIN_URL = 'api/login';
  public static readonly USER_DETAILS_URL = 'api/get_user_details';
}

export interface Section {
  questions: Question[]
  section_name: string
  section_id: string
}

export interface Question {
  id: number
  question: string
  answer_type: string
  choice_type?: string
  choice_name?: string[]
  comment: boolean
}

export const backend_json = {
  "1":{
     "questions":[
        {
           "id":58,
           "question":"Employee name",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":59,
           "question":"Employee ID",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":60,
           "question":"Designation",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Incharge",
              "Pharmacist",
              "Sr. Pharma Aide",
              "Pharma aid",
              "CSA"
           ]
        },
        {
           "id":61,
           "question":"Full Store ID in Capitals without any Mistakes (Ex: INTGHYD00001)",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":62,
           "question":"Full Store Name",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Employee and Store details"
  },
  "2":{
     "questions":[
        {
           "id":63,
           "question":"Store opened on time",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":64,
           "question":"Reason for not opened on time",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":65,
           "question":"Yesterday early closed",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Closed on time",
              "Early Closed"
           ]
        },
        {
           "id":66,
           "question":"Reason for closing early",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":67,
           "question":"Checked internet connectivity",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":68,
           "question":"Vapoz bill done",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":69,
           "question":"Arrangement of stocks / Files and register properly as required?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":70,
           "question":"DSR /Schedule H,H1 Filed",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        }
     ],
     "section_name":"Store opening & Closing"
  },
  "3":{
     "questions":[
        {
           "id":71,
           "question":"Front Glass ,Entrance ceiling and parking area are cleaned ?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":72,
           "question":"Counter, Floor and Allocated racks are cleaned ?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":73,
           "question":"Displays of all Products Organized and facing of brands towards customers?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":74,
           "question":"The customer area is cleaned and there are no Carton boxes /mops/ brooms at customer area.",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":75,
           "question":"Does FMCG glass racks are installed near customer area/Entrance",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":76,
           "question":"Glass rack is well maintained and cleaned",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":77,
           "question":"All the offer label is displaced to specific products",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":78,
           "question":"All the products are displayed as per planogram",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":79,
           "question":"Reason for not displaying as per planogram",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Store cleanliness"
  },
  "4":{
     "questions":[
        {
           "id":80,
           "question":"Everyone Wearing ID cards?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":81,
           "question":"All the Male staff Fully shaved / Properly trimmed",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        }
     ],
     "section_name":"Staff Grooming"
  },
  "5":{
     "questions":[
        {
           "id":82,
           "question":"Employees are Wishing customers?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":83,
           "question":"Employee handling customers politely and gentle?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        }
     ],
     "section_name":"Customer service"
  },
  "6":{
     "questions":[
        {
           "id":84,
           "question":"CFP/BBOC  follow ups are completed?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":85,
           "question":"Commitments are fulfilled as per time",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":86,
           "question":"Home Delivery are done (If any)",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":87,
           "question":"Web order /Sale order  followup",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Completed",
              "Pending"
           ]
        },
        {
           "id":88,
           "question":"Reason for pending web order/sale order followup",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Customer retention activities"
  },
  "7":{
     "questions":[
        {
           "id":89,
           "question":"TO's Warehouse - Store",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Completed",
              "Pending"
           ]
        },
        {
           "id":90,
           "question":"TO's Store- Store",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Completed",
              "Pending"
           ]
        },
        {
           "id":91,
           "question":"TO's Store - Warehouse",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Completed",
              "Pending"
           ]
        },
        {
           "id":92,
           "question":"Web order cancelled/Sale order cancelled/emergency Products tranfer?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Completed",
              "Pending"
           ]
        },
        {
           "id":93,
           "question":"Short Expiry / Slow moving /VDC",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Completed",
              "Pending"
           ]
        }
     ],
     "section_name":"Tranfers (Inwards/Outwards)"
  },
  "8":{
     "questions":[
        {
           "id":94,
           "question":"Bounce Entry and Emergency indent are done in the register",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":95,
           "question":"Files and register are updated ?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":96,
           "question":"Updating the Bounce in the system is done?",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        }
     ],
     "section_name":"Bounce and registers"
  },
  "9":{
     "questions":[
        {
           "id":97,
           "question":"Bank Deposit Amount",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":98,
           "question":"Bank deposit details entered in POS",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":99,
           "question":"Cah handover hapenning everyday",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":100,
           "question":"Reason for not happening cash handover",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Bank deposit"
  },
  "10":{
     "questions":[
        {
           "id":101,
           "question":"Yesterday excess cash",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":102,
           "question":"Net excess cash",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Excess cash"
  },
  "11":{
     "questions":[
        {
           "id":103,
           "question":"Internal Auditing Done",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":104,
           "question":"Reason for not audit",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":105,
           "question":"Internal audit done by (Staff names)",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":106,
           "question":"Rack No./ Alphabet details/Categories?",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":107,
           "question":"Audit Shortage",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":108,
           "question":"Value of Audit Shortage?",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Auditing"
  },
  "12":{
     "questions":[
        {
           "id":109,
           "question":"Does store is doing well in terms of sales",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":110,
           "question":"reason for degrowth",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        },
        {
           "id":111,
           "question":"action plan for sale improvement",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Store performance"
  },
  "13":{
     "questions":[
        {
           "id":112,
           "question":"Any issues in the store",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Yes",
              "No"
           ]
        },
        {
           "id":113,
           "question":"Which department support is needed",
           "answer_type":"select",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Operations",
              "INFRA",
              "EDP",
              "Wharehouse",
              "Marketing"
           ]
        },
        {
           "id":115,
           "question":"Which department support is needed",
           "answer_type":"multi",
           "comment":false,
           "auto_populate":true,
           "auto_data":100,
           "choice_name":[
              "Operations",
              "INFRA",
              "EDP",
              "Wharehouse",
              "Marketing"
           ]
        },
        {
           "id":114,
           "question":"What is the Issue (Please mention the problem)",
           "answer_type":"text",
           "comment":false,
           "auto_populate":false
        }
     ],
     "section_name":"Issues"
  }
};

const APPROVAL_SERVICE_URL = 'https://example.com/approve/'

const fetch = async (url: string, config: any)=>{
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  await delay(5000);
  const amount = Number(config.body.get('amount'));
  const income = Number(config.body.get('income'));
  const credit = Number(config.body.get('credit'));
  const worth = Number(config.body.get('worth'));
  if (amount>9000000){
    return {
      ok: false,
      status:400,
      json: async ()=>{
        return {
          approved:false,
          message:'Investment Amount above $9,000,000 not allowed'
        }
      }
    };
  }
  if (amount > (.2*income)||
      credit < 600 ||
      amount > (.03*worth)){
    return {
      status:200,
      ok: true,
      json: async ()=>{
        return {
          approved:false,
          message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      }
    };
  }
  return {
    status:200,
    ok: true,
    json: async ()=>{
      return {
        approved:true,
        message:''
      }
    }
  };
};

const ApprovalService = async (values: any) => {
  const body = new FormData();
  for (var value in values) {
    body.append(value, values[value]);
  }

  const config = {
    body: body,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'no-cors' as RequestMode,
  };
  const request = fetch(APPROVAL_SERVICE_URL, config);
  return request;
};


export default ApprovalService;

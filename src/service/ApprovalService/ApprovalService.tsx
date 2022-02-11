const APPROVAL_SERVICE_URL = 'https://example.com/approve/'

const fetch = async (url: string, config: any)=>{
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  await delay(5000);
  const values = JSON.parse(config.body);
  const amount = Number(values.amount);
  const income = Number(values.income);
  const credit = Number(values.credit);
  const worth = Number(values.worth);
  if (amount > (.2*income)||
      credit < 600 ||
      amount > (.03*worth)){
    return {
      status:'fail',
      message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    };
  }
  return {status:'success'};
};

const ApprovalService = async (values: any) => {
  const config = {
    body: JSON.stringify(values),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  return fetch(APPROVAL_SERVICE_URL, config);
};


export default ApprovalService;

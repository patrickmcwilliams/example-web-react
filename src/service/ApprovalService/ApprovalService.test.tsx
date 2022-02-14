import '@testing-library/jest-dom/extend-expect';
import approvalService from './ApprovalService';

describe('ApprovalService', () => {
  test('it should be approved', () => {
    approvalService({
        amount: 1000,
        type:'test',
        worth: 1000000,
        income: 100000,
        credit: 800,
    }).then((res)=>{
      expect(res.ok).toEqual(true);
      res.json().then((body)=>{
        expect(body.approved).toEqual(true)
      })
    })
  });

  test('it should not be approved', () => {
    approvalService({
        amount: 1000,
        type:'test',
        worth: 1,
        income: 100000,
        credit: 800,
    }).then((res)=>{
      expect(res.ok).toEqual(true);
      res.json().then((body)=>{
        expect(body.approved).toEqual(false)
      })
    })
  });
});
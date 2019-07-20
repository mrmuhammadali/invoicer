// @flow

export type Item = {
  description: string,
  quantity: number,
  unitPrice: number,
}

export type Values = {
  companyName: string,
  companyAddress: string,
  companyCity: string,
  companyPhone: string,
  companyEmail: string,

  invoiceNumber: string,
  invoiceTitle: string,
  createDate: string,
  dueDate: string,

  clientName: string,
  clientAddress: string,
  clientCity: string,
  clientPhone: string,
  clientEmail: string,

  currency: string,
  taxValue: number,
  amountPaid: number,
  terms: string,
  items: Item[],
}

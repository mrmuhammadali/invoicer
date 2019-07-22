// @flow

export type InvoiceItem = {
  description: string,
  quantity: number,
  unitPrice: number,
}

export type Invoice = {
  invoiceId: string,
  issueDate: string,
  dueDate: string,

  currency: string,
  taxValue: number,
  amountPaid: number,
  terms: string,
  items: InvoiceItem[],
}

export type Person = {
  name: string,
  city: string,
  address: string,
  phone: string,
  email: string,
}

export type Values = {
  client: Person,
  seller: Person,
  invoice: Invoice,
  isEditable?: boolean,
  action?: string,
}

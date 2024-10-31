import { formatPrice } from "../FormatPrice"

export function FormatInstallment(installment:  Array<number>) {
    return `${formatPrice(installment[0])} x ${formatPrice(installment[1])}`
}
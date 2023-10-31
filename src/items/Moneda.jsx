const Formato_Moneda = new Intl+NumberFormat(undefined, { moneda: "ARS", estilo: "mmoneda", })

export function FormatoMoneda(numero: Number){
    return(
        FormatoMoneda.format(numero)
    )
}
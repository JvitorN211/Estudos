using Caelum.Stella.CSharp.Vault;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dinheiro
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Money money = 10.00;
            Debug.WriteLine(money);

            double valor1 = 10.00;
            double valor2 = 30.00;

            Money total = valor1 + valor2;
            Debug.WriteLine(total);

            decimal minuendo = 20m;
            decimal subtraindo = 15m;
            Money diferenca = minuendo - subtraindo;
            Debug.WriteLine(diferenca);

            Money euro = new Money(Currency.EUR, 1000);
            Debug.WriteLine(euro);

            Money dolar = new Money(Currency.USD, 1000);
            Debug.WriteLine(dolar);

            CultureInfo.DefaultThreadCurrentCulture = new CultureInfo("en-US");
            Debug.WriteLine(dolar);
            CultureInfo.DefaultThreadCurrentCulture = new CultureInfo("pt-BR");

            //Não é possível somar moedas diferentes sem fazer as devidas converções.
            //Money somaMoedasDiferentes = euro + dolar;
            //Debug.WriteLine(somaMoedasDiferentes);
        }
    }
}

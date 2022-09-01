using Caelum.Stella.CSharp.Format;
using Caelum.Stella.CSharp.Validation;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ValidaDocumentos
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string cpf1 = "02159547182";
            string cpf2 = "98745366797";
            string cpf3 = "22222222222";

            ValidarCPF(cpf1);
            ValidarCPF(cpf2);
            ValidarCPF(cpf3);

            string cnpj1 = "41371762426758";
            string cnpj2 = "28784172530770";

            ValidarCNPJ(cnpj1);
            ValidarCNPJ(cnpj2);

            string titulo1 = "384555830175";
            string titulo2 = "433661080190";

            ValidarTitulo(titulo1);
            ValidarTitulo(titulo2);

            string cpfFormatado = new CPFFormatter().Format(cpf1);
            Debug.WriteLine(cpfFormatado);

            Debug.WriteLine(new CPFFormatter().Unformat(cpfFormatado));

            string cnpjFormatado = new CNPJFormatter().Format(cnpj1);
            Debug.WriteLine(cnpjFormatado);

            Debug.WriteLine(new CNPJFormatter().Unformat(cnpjFormatado));

            string tituloFormatado = new TituloEleitoralFormatter().Format(titulo1);
            Debug.WriteLine(tituloFormatado);

            Debug.WriteLine(new TituloEleitoralFormatter().Unformat(tituloFormatado));
        }

        private static void ValidarTitulo(string titulo)
        {
            if (new TituloEleitoralValidator().IsValid(titulo))
            {
                Debug.WriteLine("Título Válido: " + titulo);
            }
            else
            {
                Debug.WriteLine("Título Inválido: " + titulo);
            }
        }

        private static void ValidarCNPJ(string cnpj)
        {
            if (new CNPJValidator().IsValid(cnpj))
            {
                Debug.WriteLine("CNPJ Válido: " + cnpj);
            }
            else
            {
                Debug.WriteLine("CNPJ Inválido: " + cnpj);
            }
        }

        private static void ValidarCPF(string cpf)
        {
            if (new CPFValidator().IsValid(cpf))
            {
                Debug.WriteLine("CPF Válido: " + cpf);
            }
            else
            {
                Debug.WriteLine("CPF Inválido: " + cpf);
            }
        }
    }
}

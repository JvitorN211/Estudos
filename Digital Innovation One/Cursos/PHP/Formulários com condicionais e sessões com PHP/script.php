<?php

//Array
$categorias     = [];

//Separando as categorias da Array
$categorias[]   = 'infantil';
$categorias[]   = 'adolescente';
$categorias[]   = 'adulto';
$categorias[]   = 'idoso';
//print_r($categorias);

//Competidor
$nome           = $_POST['nome'];
$idade          = $_POST['idade'];
// var_dump($nome);
// var_dump($idade);

if (empty($nome)) {
    echo "O nome não pode ser vazio! ";
    return;
}else if (empty($idade)) {
    echo "O campo idade não pode ficar vazio!";
    return;
}

if (strlen($nome) < 3) {
    echo "O nome deve conter mais que 3 caracteres!";
    return;
}

if (strlen($nome) > 40) {
    echo "Este nome é muito extenso!";
    return; 
}

if (!is_numeric($idade)) {
    echo "Informe sua idade verdadeira!";
    return;
}

//Validação de idade e separação por categorias
if ($idade >= 6 && $idade <= 12) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'infantil') {
            echo "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            return;
        }
    } 
}else if ($idade >= 13 && $idade <= 17) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'adolescente') {
            echo "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            return;
        }
    } 
}else if ($idade >= 18 && $idade <= 59) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'adulto') {
            echo "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            return;
        }
    }
}else if ($idade >= 60) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'idoso') {
            echo "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            return;
        }
    }
}else {
    echo 'A idade do nadador não se adequa a nenhuma das categorias cadastradas!';
}

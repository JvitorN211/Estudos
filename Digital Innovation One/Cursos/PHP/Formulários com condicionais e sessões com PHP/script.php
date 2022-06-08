<?php

session_start();

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
    $_SESSION['mensagem-de-erro'] = 'O nome não pode ser vazio! Por favor insira um nome válido.';
    header ('location: index.php');
    return;
}else if (empty($idade)) {
    $_SESSION['mensagem-de-erro'] = 'O campo idade não pode ficar vazio!';
    header ('location: index.php');
    return;
}else if (strlen($nome) < 3) {
    $_SESSION['mensagem-de-erro'] = 'O nome deve conter mais que 3 caracteres!';
    header ('location: index.php');
    return;
}else if (strlen($nome) > 40) {
    $_SESSION['mensagem-de-erro'] = 'Este nome é muito extenso!';
    header ('location: index.php');
    return;
}else if (!is_numeric($idade)) {
    $_SESSION['mensagem-de-erro'] = 'Informe sua idade verdadeira!';
    header ('location: index.php');
    return; 
}else if ($idade <= 5) {
    $_SESSION['mensagem-de-erro'] = 'A idade do nadador não se adequa a nenhuma das categorias cadastradas!';
    header ('location: index.php');
    return; 
}

//Validação de idade e separação por categorias
if ($idade >= 6 && $idade <= 12) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'infantil') {
            $_SESSION['mensagem-de-sucesso'] = "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            header ('location: index.php');
            return;
        }
    } 
}else if ($idade >= 13 && $idade <= 17) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'adolescente') {
            $_SESSION['mensagem-de-sucesso'] = "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            header ('location: index.php');
            return;
        }
    } 
}else if ($idade >= 18 && $idade <= 59) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'adulto') {
            $_SESSION['mensagem-de-sucesso'] = "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            header ('location: index.php');
            return;
        }
    }
}else if ($idade >= 60) {
    for ($i = 0; $i <= count($categorias); $i++) {
        if ($categorias[$i] == 'idoso') {
            $_SESSION['mensagem-de-sucesso'] = "O nadador " . $nome . " compete na categoria " . $categorias[$i];
            header ('location: index.php');
            return;
        }
    }
}
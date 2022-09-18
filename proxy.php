<?php

$sensebox_id = filter_input(INPUT_GET, 'sensebox-id', FILTER_SANITIZE_URL);
$body = file_get_contents('https://api.opensensemap.org/boxes/' . $sensebox_id);

return $body;

?>
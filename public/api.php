<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true) ?: [];

// Create secure leads directory if not exists
$leadsDir = __DIR__ . '/leads';
if (!is_dir($leadsDir)) {
    @mkdir($leadsDir, 0755, true);
    @file_put_contents($leadsDir . '/.htaccess', "Deny from all\n");
}

$ref = 'TBG-' . strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 8));

// Save lead to local log on the server
if (!empty($data) || $_SERVER['REQUEST_METHOD'] === 'POST') {
    $leadRecord = [
        'id' => $ref,
        'date' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'endpoint' => $uri,
        'payload' => $data
    ];

    $logFile = $leadsDir . '/inquiries_' . date('Y-m') . '.json';
    $existing = [];
    if (file_exists($logFile)) {
        $existing = json_decode(file_get_contents($logFile), true) ?: [];
    }
    $existing[] = $leadRecord;
    @file_put_contents($logFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
}

// Responses based on endpoint
if (strpos($uri, 'estimate') !== false) {
    echo json_encode([
        'success' => true,
        'referenceId' => $ref,
        'estimatedTotal' => 150000,
        'unitPrice' => 150,
        'currency' => 'INR',
        'message' => 'Preliminary estimate generated.'
    ]);
    exit;
}

echo json_encode([
    'success' => true,
    'referenceId' => $ref,
    'message' => 'Your request has been received successfully. Our team will review your specifications and contact you shortly.'
]);


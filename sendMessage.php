<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Debug: Check if POST is received
    error_log("POST request received.");

    // Get email and message from POST request
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email address.";
        error_log("Invalid email: $email");
        exit;
    }

    // Validate message
    if (empty(trim($message))) {
        http_response_code(400);
        echo "Message cannot be empty.";
        error_log("Empty message.");
        exit;
    }

    // Email recipient
    $to = "shaikishaqali6@gmail.com"; // Replace with your email address

    // Email subject
    $subject = "New Contact Form Submission";

    // Email body
    $body = "You have received a new message from: $email\n\n" .
            "Message:\n$message";

    // Email headers
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=utf-8";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Message sent successfully.";
        error_log("Email sent successfully to: $to");
    } else {
        http_response_code(500);
        echo "Failed to send email.";
        error_log("Error sending email.");
    }
} else {
    http_response_code(405);
    echo "Invalid request method.";
    error_log("Invalid request method.");
}
?>

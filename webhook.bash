export TELEGRAM_API_TOKEN=$1
export TELEGRAM_WEBHOOK_URL=$2

curl "https://api.telegram.org/bot$TELEGRAM_API_TOKEN/setWebhook?url=$TELEGRAM_WEBHOOK_URL"
# Tamper detection for kinoti.sh
HASHFILE="kinoti.sh.hash"
if [ ! -f "$HASHFILE" ]; then
  echo "Hash file missing. Cannot verify script integrity."
  rm -- "$0" "$PASSFILE"
  echo "Self-destruct complete."
  exit 1
fi
CUR_HASH=$(sha256sum "$0" | awk '{print $1}')
STORED_HASH=$(cat "$HASHFILE")
if [ "$CUR_HASH" != "$STORED_HASH" ]; then
  echo "Script tampering detected! Deleting unlock script and password file."
  rm -- "$0" "$PASSFILE" "$HASHFILE"
  echo "Self-destruct complete."
  exit 1
fi



PASSFILE="Designed_by_IAN_KINOTI"
MAX_ATTEMPTS=2
ATTEMPT=1

if [ ! -f "$PASSFILE" ]; then
  echo "Password file missing. Cannot unlock."
  exit 1
fi

# Read and check for tampering (must be base64 of 1531)
ENCODED_CODE=$(cat "$PASSFILE")
EXPECTED="MTUzMQo="
if [ "$ENCODED_CODE" != "$EXPECTED" ]; then
  echo "Tampering detected! Deleting unlock script and password file."
  rm -- "$0" "$PASSFILE"
  echo "Self-destruct complete."
  exit 1
fi

# Decode the code
CODE=$(echo "$ENCODED_CODE" | base64 -d)

while [ $ATTEMPT -le $MAX_ATTEMPTS ]; do
  read -sp "Enter authorization code: " INPUT_CODE
  echo
  if [ "$INPUT_CODE" = "$CODE" ]; then
    echo "Access granted! Files are now unlocked."
    # Make all files writable except kinoti.sh and password file
    find . -type f \( ! -name "kinoti.sh" ! -name "$PASSFILE" \) -exec chmod u+w {} +
    exit 0
  else
    echo "Invalid code."
    ATTEMPT=$((ATTEMPT+1))
  fi
done

# If here, max attempts reached: self-destruct
echo "Maximum attempts reached. Deleting unlock script and password file."
rm -- "$0" "$PASSFILE"
echo "Self-destruct complete."
exit 1

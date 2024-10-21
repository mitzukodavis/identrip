(define-non-fungible-token restaurant uint)

(define-data-var last-token-id uint u0)

(define-public (mint-restaurant-nft (restaurant-name (string-ascii 100)))
  (let
    (
      (token-id (+ (var-get last-token-id) u1))
    )
    (try! (nft-mint? restaurant token-id tx-sender))
    (var-set last-token-id token-id)
    (ok token-id)
  )
)

(define-read-only (get-last-token-id)
  (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
  (ok (some (concat "https://api.example.com/restaurant/" (uint-to-ascii token-id))))
)

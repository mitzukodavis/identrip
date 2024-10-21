(define-non-fungible-token identrip-restaurant uint)

(define-data-var last-token-id uint u0)

(define-map restaurant-data
  { token-id: uint }
  {
    name: (string-ascii 100),
    stx-address: principal,
    verified: bool,
    sustainability-score: uint,
    total-bookings: uint,
    stx-bookings: uint,
    fraud-score: uint
  }
)

(define-map user-rewards
  { user: principal }
  { stx-balance: uint }
)

(define-public (mint-restaurant-nft (restaurant-name (string-ascii 100)) (stx-address principal))
  (let
    (
      (token-id (+ (var-get last-token-id) u1))
    )
    (try! (nft-mint? identrip-restaurant token-id tx-sender))
    (map-set restaurant-data { token-id: token-id }
      {
        name: restaurant-name,
        stx-address: stx-address,
        verified: false,
        sustainability-score: u50,
        total-bookings: u0,
        stx-bookings: u0,
        fraud-score: u0
      }
    )
    (var-set last-token-id token-id)
    (ok token-id)
  )
)

(define-public (verify-restaurant (token-id uint))
  (let
    (
      (restaurant (unwrap! (map-get? restaurant-data { token-id: token-id }) (err u404)))
    )
    (map-set restaurant-data { token-id: token-id }
      (merge restaurant { verified: true })
    )
    (ok true)
  )
)

(define-public (update-sustainability-score (token-id uint) (new-score uint))
  (let
    (
      (restaurant (unwrap! (map-get? restaurant-data { token-id: token-id }) (err u404)))
    )
    (asserts! (<= new-score u100) (err u400))
    (map-set restaurant-data { token-id: token-id }
      (merge restaurant { sustainability-score: new-score })
    )
    (ok true)
  )
)

(define-public (book-restaurant (token-id uint) (user principal) (stx-payment uint))
  (let
    (
      (restaurant (unwrap! (map-get? restaurant-data { token-id: token-id }) (err u404)))
      (current-total-bookings (get total-bookings restaurant))
      (current-stx-bookings (get stx-bookings restaurant))
    )
    (try! (stx-transfer? stx-payment tx-sender (get stx-address restaurant)))
    (map-set restaurant-data { token-id: token-id }
      (merge restaurant {
        total-bookings: (+ current-total-bookings u1),
        stx-bookings: (+ current-stx-bookings u1)
      })
    )
    (ok true)
  )
)

(define-public (add-review (token-id uint) (user principal) (rating uint))
  (let
    (
      (restaurant (unwrap! (map-get? restaurant-data { token-id: token-id }) (err u404)))
      (current-rewards (default-to { stx-balance: u0 } (map-get? user-rewards { user: user })))
    )
    (asserts! (<= rating u5) (err u400))
    (map-set user-rewards { user: user }
      { stx-balance: (+ (get stx-balance current-rewards) u1) }
    )
    (ok true)
  )
)

(define-read-only (get-restaurant-data (token-id uint))
  (ok (unwrap! (map-get? restaurant-data { token-id: token-id }) (err u404)))
)

(define-read-only (get-user-rewards (user principal))
  (ok (default-to { stx-balance: u0 } (map-get? user-rewards { user: user })))
)

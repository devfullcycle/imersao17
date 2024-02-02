package entity

import "errors"

type OrderRequest struct {
	OrderID  string  `json:"order_id"`
	CardHash string  `json:"card_hash"`
	Total    float64 `json:"total"`
}

func NewOrderRequest(orderID, cardHash string, total float64) *OrderRequest {
	return &OrderRequest{
		OrderID:  orderID,
		CardHash: cardHash,
		Total:    total,
	}
}

func (o *OrderRequest) Validate() error {
	if o.OrderID == "" {
		return errors.New("order_id is required")
	}
	if o.CardHash == "" {
		return errors.New("card_hash is required")
	}
	if o.Total <= 0 {
		return errors.New("total must be greater than 0")
	}
	return nil
}

func (o *OrderRequest) Process() (*OrderResponse, error) {
	if err := o.Validate(); err != nil {
		return nil, err
	}
	orderResponse := NewOrderResponse(o.OrderID, "failed")
	if o.Total < 100.00 {
		orderResponse.Status = "paid"
	}
	return orderResponse, nil
}

type OrderResponse struct {
	OrderID string `json:"order_id"`
	Status  string `json:"status"` // paid, failed
}

func NewOrderResponse(orderID, status string) *OrderResponse {
	return &OrderResponse{
		OrderID: orderID,
		Status:  status,
	}
}

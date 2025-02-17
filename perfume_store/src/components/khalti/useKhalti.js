import { useState } from "react";
import axios from "axios";
import { khaltiConfig, khaltiClient } from "./khaltiConfig";

export function useKhalti({ onSuccess, onError, autoRedirect = true }) {
  const [pidx, setPidx] = useState(null);
  const [initiationError, setInitiationError] = useState(null);
  const [statusError, setStatusError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initiate = async (data) => {
    setIsLoading(true);
    setInitiationError(null);

    try {
      const response = await khaltiClient.post(
        `${khaltiConfig.baseUrl}/epayment/initiate/`,
        data
      );


      const paymentResponse = response.data;
      setPidx(paymentResponse.pidx);

      if (autoRedirect) {
        window.location.href = paymentResponse.payment_url;
      }

      return paymentResponse;
    } catch (error) {
      setInitiationError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkPaymentStatus = async () => {
    if (!pidx) {
      throw new Error('Payment ID not found');
    }

    setIsLoading(true);
    setStatusError(null);

    try {
      const response = await khaltiClient.post(
        `${khaltiConfig.baseUrl}/epayment/lookup/`,
        { pidx }
      );

      const paymentStatus = response.data;
      if (paymentStatus.status === 'Completed') {
        onSuccess?.(paymentStatus);
      }

      return paymentStatus;
    } catch (error) {
      setStatusError(error);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    initiate,
    checkPaymentStatus,
    pidx,
    initiationError,
    statusError,
    isLoading,
  };
}
import { AxiosInstance } from "axios";
import { api } from "../api";
import { HttpResponse } from "../models";

class OrderProductRepository {
  constructor(private api: AxiosInstance) {}
  async deleteOrderProduct(
    OrderCode: string,
    ProductID: number
  ): Promise<HttpResponse<void>> {
    try {
      const response = await this.api.delete<HttpResponse<void>>(
        "/order-product",
        {
          params: {
            OrderCode,
            ProductID,
          },
        }
      );
      return response.data;
    } catch (e: any) {
      throw new Error(e?.message ?? "");
    }
  }
}

export const orderProductRepository = new OrderProductRepository(api);

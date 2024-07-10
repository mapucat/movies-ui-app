export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface ErrorResponse {
  success: boolean;
  status_code: number;
  status_message: string;
}

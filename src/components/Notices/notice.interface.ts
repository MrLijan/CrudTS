export interface Notice {
  status: 'success' | 'error';
  reason?: string;
  errorId?: string;
}

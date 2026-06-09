export interface SubmitResult {
  ok: boolean;
  message: string;
  /** Field-level errors keyed by field name. */
  errors?: Record<string, string[]>;
}

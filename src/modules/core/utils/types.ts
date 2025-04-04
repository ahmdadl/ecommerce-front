export type PaginationInfoEntity = {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    from: number | null;
    to: number | null;
    has_more_pages: boolean;
};

// Define generic types for flexibility
export type ApiResponseData<T = any> = T;

// Base response structure
export interface ApiResponse<T = any> {
    success: boolean;
    message: string | null;
    data?: ApiResponseData<T>;
    status: number;
}

// Success response with data
export interface SuccessResponse<T = any> extends ApiResponse<T> {
    success: true;
    data?: T;
}

// Error response
export interface ErrorResponse extends ApiResponse<never> {
    success: false;
    errors?: Record<string, string[] | string>;
}

// Pagination info
export interface PaginationInfo {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    from: number | null;
    to: number | null;
    has_more_pages: boolean;
}

// Paginated response
export interface PaginatedResponse<T> extends ApiResponse<T> {
    success: true;
    records: T[];
    paginationInfo: PaginationInfo;
}

// No content response
export interface NoContentResponse extends ApiResponse<never> {
    success: true;
    data?: never;
}

// Validation error response
export interface ValidationErrorResponse extends ErrorResponse {
    errors: Record<string, string[] | string>;
}

// Specific error responses
export interface NotFoundResponse extends ErrorResponse {}
export interface UnauthorizedResponse extends ErrorResponse {}
export interface ForbiddenResponse extends ErrorResponse {}
export interface ServerErrorResponse extends ErrorResponse {}

// Record response
export interface RecordResponse<T>
    extends SuccessResponse<{
        record: T;
    }> {}

// Records response
export interface RecordsResponse<T>
    extends SuccessResponse<{
        records: T[];
    }> {}

// Union type for all possible responses
export type ApiResponseType<T = any> =
    | SuccessResponse<T>
    | ErrorResponse
    | PaginatedResponse<T>
    | NoContentResponse
    | ValidationErrorResponse
    | NotFoundResponse
    | UnauthorizedResponse
    | ForbiddenResponse
    | ServerErrorResponse
    | RecordResponse<T>
    | RecordsResponse<T>;

// Type guard functions
export const isSuccessResponse = <T>(
    response: ApiResponseType<T>
): response is SuccessResponse<T> =>
    response.success === true && 'data' in response;

export const isErrorResponse = <T>(
    response: ApiResponseType<T>
): response is ErrorResponse => response.success === false;

export const isPaginatedResponse = <T>(
    response: ApiResponseType<T>
): response is PaginatedResponse<T> =>
    response.success === true &&
    'records' in response &&
    'paginationInfo' in response;

export const isValidationErrorResponse = <T>(
    response: ApiResponseType<T>
): response is ValidationErrorResponse =>
    response.success === false && 'errors' in response;

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CommonDatePicker = ({
  label = "Select Date",
  value,
  onChange,
  format = "DD/MM/YYYY",
  disabled = false,
  minDate,
  maxDate,
  fullWidth = true,
  size = "small",
  error = false,
  helperText = "",
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={(nextValue) =>
          onChange?.(
            nextValue && nextValue.isValid()
              ? nextValue.format("YYYY-MM-DD")
              : "",
          )
        }
        format={format}
        disabled={disabled}
        minDate={minDate ? dayjs(minDate) : undefined}
        maxDate={maxDate ? dayjs(maxDate) : undefined}
        slotProps={{
          textField: {
            fullWidth,
            size,
            error,
            helperText,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CommonDatePicker;

# echo-action
Repo for learning how to create custom Github Actions.

## Inputs

### `message`

**Required** The message to echo. 

Default: `''`.

## Outputs

### `time`

The time of the echo.

## Example usage

```yaml
uses: maurooyhanart/echo-action@v1
with:
  message: 'hello world'
```
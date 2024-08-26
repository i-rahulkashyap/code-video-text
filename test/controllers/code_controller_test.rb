require "test_helper"

class CodeControllerTest < ActionDispatch::IntegrationTest
  test "should get editor" do
    get code_editor_url
    assert_response :success
  end

  test "should get compile" do
    get code_compile_url
    assert_response :success
  end
end

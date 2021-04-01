import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';


function resetForm(formRef) {
    MessageBox.confirm("此操作将无法撤回, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    })
        .then(() => {
            formRef.resetFields()
            Message({
                type: "success",
                message: "成功!",
            });
        })
        .catch((err) => {
            console.log('出错了', err);
            Message({
                type: "info",
                message: "已取消",
            });
        });
}

export default resetForm

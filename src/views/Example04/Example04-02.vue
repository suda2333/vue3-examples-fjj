


<script lang="ts">
import { User } from "@/datasource/Types";
import { computed, defineComponent, ref, Ref } from "vue";
function useMessage(msg: Ref<string>) {
  const reversMessage = computed(() =>
    msg.value
      .split("")
      .reverse()
      .join("")
  );
  const changeMessage = () => {
    msg.value = "composition-api";
  };
  return {
    reversMessage,
    changeMessage
  }
}
function userUser(user: Ref<User>) {
  const formatDateFunc = computed(() => (data:string) => data.replace("T"," "));
  const changeAddress = () => {
    user.value.address = (Math.random() * 1000).toFixed(2).toString();
  };
  return {
    formatDateFunc,
    changeAddress
  }
}
export default defineComponent({
  setup() {
    const user: User = {
      name: "BO",
      inserttime: "2046-04-09T11:04:25"
    };
    const messageRef = ref("hello world");
    const userRef = ref(user);
    const { reversMessage, changeMessage } = useMessage(messageRef);
    const  { formatDateFunc, changeAddress } = userUser(userRef);
    return {
      messageRef,
      reversMessage,
      changeMessage,
      formatDateFunc,
      changeAddress,
      userRef
    };
  }
});
</script>

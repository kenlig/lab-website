<template>
  <v-row>
    <v-col cols="12" class="ml-4">
      <v-file-input
        show-size
        counter
        multiple
        label="选择文件"
        v-model="files"
        :hide-details="errorMsg.length === 0"
        :error-messages="errorMsg"
      ></v-file-input>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    files: [],
    errorMsg: "",
  }),
  watch: {
    files(val) {
      if (this.files.length > 0) {
        const file = this.files[0];
        // 条件判断
        if (file.size > 500000) {
          this.errorMsg = "文件大小不能超过500KB";
          return;
        }
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
          const text = e.target.result;
          console.log(text);
        };
      } else {
        this.errorMsg = "";
      }
    },
  },
  methods: {
    csvToArray(str, delimiter = ",") {
      // slice from start of text to the first \n index
      // use split to create an array from string by delimiter
      const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
      // slice from \n index + 1 to the end of the text
      // use split to create an array of each csv value row
      const rows = str.slice(str.indexOf("\n") + 1).split("\n");
      // Map the rows
      // split values from each row into an array
      // use headers.reduce to create an object
      // object properties derived from headers:values
      // the object passed as an element of the array
      const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
          object[header] = values[index];
          return object;
        }, {});
        return el;
      });
      // return the array
      return arr;
    },
  },
};
</script>

<style></style>

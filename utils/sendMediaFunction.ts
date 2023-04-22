import type { Context } from "grammy";

async function sendMediaFunction(ctx: Context, file: any) {
  const fileId = file.props.fileId;
  const filePath = (await ctx.api.getFile(fileId)).file_path;

  const type = filePath?.split("/")[0];

  if (type === "photos") {
    return await ctx.replyWithPhoto(fileId);
  }
  if (type === "videos") {
    return await ctx.replyWithVideo(fileId);
  }
  if (type === "documents") {
    return await ctx.replyWithDocument(fileId);
  }

  throw Error("Type not found");
}

export default sendMediaFunction;

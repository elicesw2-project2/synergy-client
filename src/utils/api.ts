import axios from 'axios';
import { IChannel } from 'components/Bar/Side/ChannelCategory';
import { IWorkSpace } from 'components/Bar/Workspace/WorkSpaceBar';

const BASE_URL = `https://circuit-synergy.herokuapp.com`;

// workspace
export async function getWorkspaces() {
  const result = await axios.get(`${BASE_URL}/workspaces`);
  return result.data.data;
}

export async function postWorkspace(workspace: IWorkSpace) {
  return await axios.post(`${BASE_URL}/workspaces`, workspace);
}

export async function postImageUpload(imageFile: File) {
  const frm = new FormData();
  frm.append('profile', imageFile);
  const result = await axios.post(`${BASE_URL}/image/upload`, frm);
  return result.data.data;
}

export async function patchWorkspace(workspace: IWorkSpace) {
  return await axios.patch(
    `${BASE_URL}/workspaces/${workspace.workspace_idx}`,
    { name: workspace.name, profile: workspace.workspace_img }
  );
}

export async function deleteWorkspace(idx: number | undefined) {
  return await axios.delete(`${BASE_URL}/workspaces/${idx}`);
}

// channels
export async function getChannelCategory() {
  const result = await axios.get(`${BASE_URL}/channelcategory/1`);
  return result.data.data;
}

export async function getChannels(idx: number) {
  const result = await axios.get(`${BASE_URL}/channel/${idx}`);
  return result.data.data;
}

export async function postChannel(channel: IChannel) {
  return await axios.post(`${BASE_URL}/channel`, channel);
}

export async function patchChannel(channel: IChannel) {
  return await axios.patch(
    `${BASE_URL}/channel/${channel.channel_idx}`,
    channel
  );
}

export async function deleteChannel(idx: number | undefined) {
  return await axios.delete(`${BASE_URL}/channel/${idx}`);
}
/**
 * A simple GUID type for making sure we're not mixing up GUIDs and string unintentionally.
 */
export type GUID = string & { isGuid: true };

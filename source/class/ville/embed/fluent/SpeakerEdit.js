/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SpeakerEdit",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M12 3a1 1 0 0 0-1.68-.73l-3.87 3.6A.5.5 0 0 1 6.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 0 1 .35.13l2.83 2.63.15-.6c.04-.17.1-.32.16-.48L7.13 13.4A1.5 1.5 0 0 0 6.1 13H3.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5h2.6c.38 0 .75-.15 1.03-.4L11 3v10.94l1-1V3Zm3.96 1.66a7.97 7.97 0 0 1 1.99 4.46c-.33-.1-.68-.14-1.02-.12a6.97 6.97 0 0 0-1.71-3.67.5.5 0 0 1 .74-.67Zm-1.2 2.59c.42.72.65 1.5.72 2.27-.13.1-.26.2-.38.32l-.62.62c.1-.9-.09-1.86-.58-2.71a.5.5 0 0 1 .86-.5Zm-3.78 8.12 4.83-4.83a1.87 1.87 0 1 1 2.64 2.65l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.02Z";
   var pathdfilled = "M12 3a1 1 0 0 0-1.68-.73l-3.87 3.6A.5.5 0 0 1 6.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 0 1 .35.13l2.83 2.63.15-.6a3.2 3.2 0 0 1 .84-1.5L12 12.95V3Zm3.96 1.66a7.97 7.97 0 0 1 1.99 4.46c-.34-.1-.68-.14-1.02-.12a6.97 6.97 0 0 0-1.72-3.67.5.5 0 0 1 .75-.67Zm-1.2 2.59c.41.72.65 1.5.72 2.27-.14.1-.26.2-.38.32l-.63.63c.1-.92-.08-1.87-.58-2.72a.5.5 0 0 1 .87-.5Zm-3.78 8.12 4.83-4.83a1.87 1.87 0 1 1 2.64 2.65l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.02Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});
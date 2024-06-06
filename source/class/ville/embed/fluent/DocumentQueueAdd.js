/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentQueueAdd",
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

   var pathdregular = "M10.5 2H5.74C4.78 2 4 2.78 4 3.75v10.5c0 .97.78 1.75 1.75 1.75h3.46c-.1-.32-.16-.66-.19-1H5.75a.75.75 0 0 1-.75-.75V3.75c0-.41.34-.75.75-.75H10v3.5c0 .83.67 1.5 1.5 1.5H15v1.02c.34.03.68.1 1 .19V7.48c-.01-.45-.2-.88-.51-1.2l-3.77-3.77A1.75 1.75 0 0 0 10.5 2Zm.5 1.2.01.02 3.77 3.77.01.01H11.5a.5.5 0 0 1-.5-.5V3.2ZM5.5 17h4.1c.18.36.4.7.66 1H5.5A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 0 5.5 17ZM6 5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   var pathdfilled = "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v11c0 .83.67 1.5 1.5 1.5h3.7A5.5 5.5 0 0 1 16 9.2V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4-1c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 7h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1ZM6 9.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM5.5 17h4.1c.18.36.4.7.66 1H5.5A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 0 5.5 17ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm8 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z";
   
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
/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleCommunity",
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

   var pathdregular = "M8.75 3.75a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm-4.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM2.5 7.5h4.18c-.16.31-.28.65-.35 1H2.5A.5.5 0 0 0 2 9v.5c0 1.26 1.1 2.61 3.1 2.93-.33.22-.6.51-.79.85C2.21 12.71 1 11.08 1 9.5V9c0-.83.67-1.5 1.5-1.5Zm5.38 0a2.74 2.74 0 1 1 4.24 3.49A2.74 2.74 0 0 1 7.88 7.5Zm.54 1a1.74 1.74 0 0 0 .87 2.35 1.74 1.74 0 0 0 2.46-1.6 1.74 1.74 0 0 0-2.01-1.73c-.59.09-1.08.46-1.32.98Zm7.27 4.78c-.2-.34-.46-.63-.79-.85 2-.32 3.1-1.67 3.1-2.93V9a.5.5 0 0 0-.5-.5h-3.82c-.08-.35-.2-.69-.36-1h4.18c.83 0 1.5.67 1.5 1.5v.5c0 1.59-1.2 3.21-3.31 3.78Zm-1.2.1a1.5 1.5 0 0 0-.99-.38h-7A1.5 1.5 0 0 0 5 14.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5c0-.45-.2-.85-.51-1.13ZM6 14.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v.5c0 1.44-1.43 3-4 3-2.57 0-4-1.56-4-3v-.5ZM14 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1Zm0 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 14 2Z";
   var pathdfilled = "M7.88 7.5a2.74 2.74 0 1 1 4.24 3.49A2.74 2.74 0 0 1 7.88 7.5Zm5.87 1.75c0-.63-.16-1.23-.43-1.75h4.18c.83 0 1.5.67 1.5 1.5v.5c0 1.59-1.2 3.21-3.31 3.78A2.5 2.5 0 0 0 13.5 12h-.95a3.74 3.74 0 0 0 1.2-2.75ZM13.5 13a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5A1.5 1.5 0 0 1 6.5 13h7ZM1 9.5c0 1.59 1.2 3.21 3.31 3.78A2.5 2.5 0 0 1 6.5 12h.95a3.74 3.74 0 0 1-.77-4.5H2.5C1.67 7.5 1 8.17 1 9v.5Zm7.75-5.75a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm8 0a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z";
   
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
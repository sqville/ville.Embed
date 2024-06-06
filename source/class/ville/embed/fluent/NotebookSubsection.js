/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NotebookSubsection",
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

   var pathdregular = "M4 5.5A3.5 3.5 0 0 1 7.5 2H10c.82 0 1.54.4 2 1H7.5A2.5 2.5 0 0 0 5 5.5V15a2.5 2.5 0 0 1-1-2V5.5ZM13.43 2h.07c.25 0 .46.23.5.52V17.4c0 .33-.22.6-.5.6-.25 0-.46-.23-.5-.52V17H8a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5V2.6c0-.3.19-.55.43-.6ZM8 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5V5H8Z";
   var pathdfilled = "M4 5.5A3.5 3.5 0 0 1 7.5 2H10c.82 0 1.54.4 2 1H7.5A2.5 2.5 0 0 0 5 5.5V15a2.5 2.5 0 0 1-1-2V5.5ZM13.5 2h-.07c-.24.05-.43.3-.43.6V4H7.5C6.67 4 6 4.67 6 5.5v10c0 .83.67 1.5 1.5 1.5H13V17.48c.04.3.25.52.5.52.28 0 .5-.27.5-.6V2.52c-.04-.3-.25-.52-.5-.52Z";
   
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
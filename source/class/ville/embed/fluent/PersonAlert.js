/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonAlert",
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

   var pathdregular = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.38 0 .75-.02 1.11-.05-.5-.13-.86-.5-1.02-.95H9a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h6.63c.09-.35.23-.7.4-1H4.01Zm7.5 2a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L11.5 15v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z";
   var pathdfilled = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.38 0 .75-.02 1.11-.05a1.5 1.5 0 0 1-.58-2.6l.97-.81V13c0-.73.2-1.41.53-2H4.01Zm7.5 2a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L11.5 15v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z";
   
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
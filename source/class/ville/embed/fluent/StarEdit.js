/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StarEdit",
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

   var pathdregular = "M10.9 2.9a1 1 0 0 0-1.8 0L7.17 6.8l-4.31.63a1 1 0 0 0-.56 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05l3.43-1.8c.16-.4.4-.76.7-1.07l.1-.09a1 1 0 0 0-.83.05l-3.87 2.03.74-4.3a1 1 0 0 0-.29-.89L3 8.43l4.32-.63a1 1 0 0 0 .75-.55L10 3.35l1.93 3.9c.15.3.43.5.75.55l4.32.63-.72.7c.48-.15 1-.17 1.49-.06a1 1 0 0 0-.63-1.63l-4.31-.63L10.9 2.9Zm4.9 7.65-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   var pathdfilled = "M10.9 2.9a1 1 0 0 0-1.8 0L7.17 6.8l-4.31.63a1 1 0 0 0-.56 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05l3.43-1.8c.16-.4.4-.76.7-1.07l4.83-4.83a2.87 2.87 0 0 1 2.67-.77 1 1 0 0 0-.63-1.63l-4.31-.63L10.9 2.9Zm4.9 7.65-4.82 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   
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